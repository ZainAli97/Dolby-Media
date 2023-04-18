import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/Constants';
import SearchBar from "./SearchBar";
const Navbar = () => (
    <>
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{ position: "sticky", justifyContent: "space-between", top: "0", background: "000" }}>
            <Link>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    </>
);

export default Navbar;