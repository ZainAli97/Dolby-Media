import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";

const Feed = () => {
    return (
        <>
            <Stack
                sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box
                    sx={{ height: { sm: "auto", md: "92vh" }, border: "1px solid #3d3d3d", px: { sm: 0, md: 2 } }}>
                    Sidebar
                    <Typography
                        className='copywright'
                        variant='body2'
                        sx={{ color: "#fff", mt: 1.5 }}>
                        Copywright 2023 Dolby Media
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};

export default Feed; 