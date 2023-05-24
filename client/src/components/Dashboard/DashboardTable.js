import React, { useEffect, useState } from 'react'

import { Table, TableHead, TableBody, TableCell, TableRow, styled, Button } from '@mui/material'

import { Link } from 'react-router-dom'

import { getAllDocuments } from '../../services/api'

const Container = styled(Table)`
    width: 70%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background: #111111;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 15px
    }
`

const DashboardTable = () => {

    const [documents, setDocuments] = useState([])

    useEffect(() => {
        getAllSavedDocuments()
    }, [])

    const getAllSavedDocuments = async () => {
        try {
            const response = await getAllDocuments()
            setDocuments(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        
        <>
            <Container>
                <TableHead>
                    <THead>
                        <TableCell>Codeshare Link</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Syntax</TableCell>
                        <TableCell>Actions</TableCell>
                    </THead>
                </TableHead>

                <TableBody>
                    {documents && documents.length > 0 ? (
                        documents.map((document) => (
                        <TBody key={document._id}>
                            <TableCell>
                                <Link to={`/${document._id}`}>
                                    {document._id}
                                </Link>
                            </TableCell>
                            <TableCell>{new Date(document.createdAt).toLocaleDateString('en-GB')}</TableCell>
                            <TableCell>{new Date(document.createdAt).toLocaleTimeString()}</TableCell>
                            <TableCell>Plain Text</TableCell>
                            <TableCell>
                            <Button variant='contained' component={Link} to={'/new'}>
                                Edit
                            </Button>
                            <Button variant='contained' component={Link} to={'/new'}>
                                Delete
                            </Button>
                            </TableCell>
                        </TBody>
                        ))
                    ) : (
                        <TBody>
                        <TableCell colSpan={5}>No documents found</TableCell>
                        </TBody>
                    )}
                    </TableBody>
            </Container>

        </>




    )
}

export default DashboardTable