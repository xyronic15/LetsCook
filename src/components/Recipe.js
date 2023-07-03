import React, { useState } from "react";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import Logo from '../assets/letscook.png';
import { MdOutlineSearch } from "react-icons/md"
// import { FaSearch } from 'react-icons/fa';

const { Configuration, OpenAIApi } = require("openai");

const Recipe = () => {
    // state values
    const [response, setResponse] = useState("");
    const [userIngredients, setUserIngredients] = useState("");
    const [image, setImage] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");

    const onFormSubmit = async (e) => {
        e.preventDefault();

        // OPENAI
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_KEY,
        });
        // console.log("KEY: ", configuration);
        const openai = new OpenAIApi(configuration);

        setResponse("Please wait...");
        setImage("");
        setYoutubeLink("");

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a Gordon Ramsay of coming up with recipe ideas given the ingredients and please mention the nutrition facts. Please also list the estimated duration time to cook this recipe" },
                { role: "user", content: userIngredients },
            ],
        });

        if (completion.data.choices && completion.data.choices[0].message) {
            const res = completion.data.choices[0].message.content;
            setResponse(res);

            const completion2 = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Come up with an image for the described recipe." },
                    { role: "user", content: res },
                ],
            });

            if (completion2.data.choices && completion2.data.choices[0].message) {
                console.log(completion2.data.choices[0].message.content);
                const response = await openai.createImage({
                    prompt: completion2.data.choices[0].message.content,
                    n: 1,
                    size: "512x512",
                });
                setImage(response.data.data[0].url);

                const completion3 = await openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "Generate a title for this recipe" },
                        { role: "user", content: res },
                    ],
                    max_tokens: 100,
                    temperature: 0.3,
                });

                if (completion3.data.choices && completion3.data.choices[0].message) {
                    const searchQuery = completion3.data.choices[0].message.content;

                    // Generate YouTube link
                    const youtubeLink = `https://www.youtube.com/results?search_query=${searchQuery}`;
                    console.log("this is the search query", searchQuery);

                    setYoutubeLink(youtubeLink);
                    console.log("this is the link", youtubeLink);
                }
            }
        }
    };

    return (
        <div style={{ maxWidth: 830, margin: 'auto', display: 'flex', minHeight: '80vh', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <br />
                <br />
                <img src={Logo} alt="Letscook" width="350px" height="auto" style={{ marginBottom: "16px" }} draggable="false" />
                <p style={{ fontSize: 12, maxWidth: 550, margin: 'auto', marginBottom: 16 }}>Ever struggled with 'What's for dinner?' Meet Letscook - converting your random ingredients into impressive, healthy meals effortlessly.</p>
                <Form onSubmit={onFormSubmit}>
                    <div style={{ position: "relative" }}>
                        <Form.Control
                            type="text"
                            name="recipe"
                            onChange={(e) => setUserIngredients(e.target.value)}
                            placeholder="What's in your fridge?"
                            style={{ borderRadius: "20px", paddingLeft: "40px", paddingTop: "10px", paddingBottom: "10px" }}
                        />
                        <MdOutlineSearch
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "15px",
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                            }}
                        />

                        <Button
                            variant="dark"
                            size="sm"
                            type="submit"
                            style={{
                                borderRadius: "20px",
                                position: "absolute",
                                top: "50%",
                                right: "10px",
                                transform: "translateY(-50%)",
                            }}
                        >
                            Generate recipe 🤤
                        </Button>
                    </div>
                </Form>

                <br />
                <br />
                {response && (
                    <Card style={{ marginBottom: 120 }}>
                        <Card.Body>
                            <Card.Title>
                                <h3></h3>
                            </Card.Title>
                            <br />
                            {image && response ? (
                                <img src={image} alt="Food" width="160px" height="160px" style={{ borderRadius: 12, marginBottom: 32 }} />
                            ) : (
                                <div style={{ marginBottom: 32 }}>[Generating image...]</div>
                            )}
                            <pre style={{ textAlign: 'left' }}>
                                <h6>{response}</h6>
                            </pre>
                            <div>
                                {youtubeLink && (
                                    <div style={{ textAlign: 'left' }}>
                                        <Card.Body>
                                            <Card.Title>
                                                <h3>YouTube Link:</h3>
                                            </Card.Title>
                                            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                                                {youtubeLink}
                                            </a>
                                        </Card.Body>
                                    </div>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </div>
    );
};

export default Recipe;
