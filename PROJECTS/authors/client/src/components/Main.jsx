import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import authorStyle from './Main.module.css';
import { Link, useNavigate } from 'react-router-dom';
// Import components for styling the table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import authorStyle from './Main.module.css';

const Main = (props) => {

    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);

    const compareName = (a, b) => {

        // converting to uppercase to have case-insensitive comparison
        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
    
        let comparison = 0;
    
        if (name1 > name2) {
            comparison = 1;
        } else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data);
                setAuthors(res.data.sort(compareName));
            })
            .catch(err => console.log(err))
    },[])

    // Go to update route
    const goToUpdate = (updateID) => {
        navigate("/edit/" + updateID);
    }

    // Go to update route
    const deleteAuthor = (deleteID) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteID}`)
            .then(res => {
                console.log(res.data);
                console.log("Delete successfully");
                // remove the note from the DOM after a successful deletion
                setAuthors(authors.filter((author) => author._id !== deleteID));
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <h3>We have quotes by:</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table>
                        {/* ======================================================= */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Author</TableCell>
                                <TableCell>Actions available</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* ======================================================= */}
                        <TableBody>
                            {authors.map((oneAuthor) => {
                                return (
                                    <TableRow key={oneAuthor._id}>
                                        <TableCell>
                                            {oneAuthor.name}
                                        </TableCell>
                                        <TableCell >
                                        
                                            <button className={authorStyle.button} onClick={() => goToUpdate(oneAuthor._id) }>Edit</button>
                                            <button className={authorStyle.button} onClick={() => deleteAuthor(oneAuthor._id)}>Delete</button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        {/* ======================================================= */}
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Main