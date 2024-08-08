import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'


const BASE_URL = "https://spend-wise-backend-rho.vercel.app/api/";




const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {
    const [userId,setUserId] = useState(null)
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)


    useEffect(()=>{
        if(localStorage.getItem("token")){
            const token = localStorage.getItem("token")
            setUserId(token)
        }
    },[incomes,expenses])

    //calculate incomes
    const addIncome = async (income) => {
        income.userId = userId
        await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.post(`${BASE_URL}get-incomes`,{userId: userId})
        setIncomes(response.data.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        console.log(id);
        await axios.post(`${BASE_URL}delete-income`,{userId:userId,id:id})
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (income) => {
        income.userId = userId
        await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.post(`${BASE_URL}get-expenses`,{userId: userId})
        setExpenses(response.data.data)
        console.log(response.data)
    }

    const deleteExpense = async (id) => {
        await axios.post(`${BASE_URL}delete-expense`,{userId:userId,id:id})
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}