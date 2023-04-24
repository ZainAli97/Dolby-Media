import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../Utils/Constants';
const selectedCategory = "New";
const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            height: { sx: "auto", md: "95%" },
            overflowY: "auto",
            flexDirection: { md: "column" },
        }}>
        {categories.map((category, index) => (
            <button
                key={index}
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && "#FC1503", color: "#fff"
                }}>
                <span
                    style={{ color: category.name === selectedCategory ? "#fff" : "red", marginRight: "15px" }}>{category.icon}</span>
                <span
                    style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>{category.name}</span>
            </button>
        ))}
    </Stack >
);

export default Sidebar;