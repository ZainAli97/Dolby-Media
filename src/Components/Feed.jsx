import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from './';
import { FetchFromAPI } from '../Utils/FetchFromAPI';
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items));
    }, [selectedCategory]);
    return (
        <>
            <Stack
                sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box
                    sx={{ height: { sm: "auto", md: "92vh" }, border: "1px solid #3d3d3d", px: { sm: 0, md: 2 } }}>
                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory} />
                    <Typography
                        className='copywright'
                        variant='body2'
                        sx={{ color: "#fff", mt: 1.5 }}>
                        Copywright 2023 Dolby Media
                    </Typography>
                </Box>
                <Box
                    p={2}
                    sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        mb={2}
                        sx={{ color: "#fff" }}>
                        {selectedCategory} <span
                            style={{ color: "#F31503" }}>Videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Box>
            </Stack>
        </>
    );
};

export default Feed; 