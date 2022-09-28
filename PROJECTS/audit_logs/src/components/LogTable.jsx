import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const mockData = [
    {
        time: {
            time: "10:20:50 pm",
            date: "Jan 2, 2021"
        },
        module: "A",
        project: "My Project X",
        environment: {
            environment: "Production",
            type: "Production"
        },
        user: {
            image: "😃",
            name: "Peter Bishop"
        },
        action: "A",
        object: {
            object: "Feature Flag",
            name: "CE-Views"
        },
        other: {
            status: "Published",
            approver: "Olivia Dunham"
        }
    },
    {
        time: {
            time: "10:20:50 pm",
            date: "Jan 2, 2021"
        },
        module: "B",
        project: "My Project X",
        environment: {
            environment: "Development",
            type: "Non-production"
        },
        user: {
            image: "😃",
            name: "Peter Bishop"
        },
        action: "B",
        object: {
            object: "Feature Flag",
            name: "CE-Views"
        },
        other: {
            status: "Pending Approval",
            approver: "Olivia Dunham"
        }
    }

];

export default function LogTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://app.harness.io/api/audit-logs?page=1")
            .then(response => response.json())
            .then(response => setData(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">TIME (PST)</TableCell>
                        <TableCell align="left">MODULE</TableCell>
                        <TableCell align="left">PROJECT</TableCell>
                        <TableCell align="left">ENVIRONMENT</TableCell>
                        <TableCell align="left">USER</TableCell>
                        <TableCell align="left">ACTION</TableCell>
                        <TableCell align="left">OBJECT</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">
                                <div>{row.time.time}</div>
                                <div>{row.time.date}</div>
                            </TableCell>
                            <TableCell align="left">{row.module}</TableCell>
                            <TableCell align="left">{row.project}</TableCell>
                            <TableCell align="left">
                                <div><strong>{row.environment.environment}</strong></div>
                                <div>Type: {row.environment.type}</div>
                            </TableCell>
                            <TableCell align="left">
                                {row.user.image} {row.user.name}
                            </TableCell>
                            <TableCell align="left">{row.action}</TableCell>
                            <TableCell align="left">
                                <div><strong>{row.object.object}</strong></div>
                                <div>Name: {row.object.name}</div>
                            </TableCell>
                            <TableCell align="left">
                                <div>{row.other.status}</div>
                                <div>Approver: {row.other.approver}</div>
                            </TableCell>
                            <TableCell align="left">
                                <button>📜</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
