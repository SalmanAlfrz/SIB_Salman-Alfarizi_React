import axios from "axios"
import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Main = () => {
    const [currency, setCurrency] = useState({
        date: '',
        base: '',
        rates: {
            CAD: '',
            EUR: '',
            IDR: '',
            JPY: '',
            CHF: '',
            GBP: ''
        }
    })
    const ambilDataCurrency = async () => {
        const data = axios.get(
            "https://api.currencyfreaks.com/latest?apikey=3829d2c45cb7420a9ad10b340bd0f927&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
        )
        return data
    }
    useEffect(() => {
        ambilDataCurrency().then((res) => setCurrency(res.data))
    }, [])
    const mataUang = ["Currency", "We Buy", "Exchange Rate", "We Sell"]
    return (
        <>
            <style type="text/css">
                {`
                .container {
                    margin-top: 20px;
                  }
                .table {
                    margin-top: 20px;
                }
                `}
            </style>
            <div>
                {
                    currency ? (
                        <>
                            <Container fluid="md" className="container">
                                <h1 style={{ margin: "0 auto" }}>Display Currency Rates</h1>
                                <Table striped bordered hover size="sm" className="table">
                                    <thead>
                                        <tr>
                                            {
                                                mataUang.map((value, index) => {
                                                    return (<th key={index}>{value}</th>)
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(currency.rates).map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value}</td>
                                                        <td>{Number(currency.rates[value]) + (Number(currency.rates[value]) * 0.05)}</td>
                                                        <td>{currency.rates[value]}</td>
                                                        <td>{Number(currency.rates[value]) - (Number(currency.rates[value]) * 0.05)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Container>
                        </>
                    ) : (
                        <>
                            <h1>Data Kosong</h1>
                        </>
                    )
                }
            </div>
        </>
    )
}
export default Main