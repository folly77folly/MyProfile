import React,  { useState, useReducer,useEffect } from "react";
import "./linklogo.css";
import { ThemeProvider } from "styled-components";
import { StyledTypography } from "../atoms/typography/mixins";
import HeaderStars from './footer-stars'
import { StyledButton } from "../atoms/Buttons/styles";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import axios from 'axios'
 

const themes = {
  mode: "light"
};

const reducer = (state, action)=>{

  if (action.type === "loading"){
    return state
  }
  if (action.type === "SEND_MESSAGE"){
    return {
          ...state,
          isLoading :true,
    }
  }
  if (action.type === "SUCCESS"){
    return {
          ...state,
          isLoading :false,
          showAlert: true,
          message : action.payload,
    }
  }
  if (action.type === "MISSING_VALUE"){
    return {
      ...state,
      isError : true,
      showAlert: true,
      message : "Fill all Values to Submit",
    }
  }

  if (action.type === "ERROR"){
    return {
      ...state,
      isLoading : false,
      isError : true,
      showAlert: true,
      message : action.payload,
    }
  }

  if (action.type === "CLOSE_MODAL"){
    return {
      ...state,
      showAlert : false,
      message : "",
    }
  }
  return state
}

const initialState ={
  isLoading :false,
  isError : false,
  data : [],
  message : "",
  showAlert : false
}


function FooterSide() {
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const [formInput, setFormInput] = useState({
    email:"",
    name: "",
    message: "",
  })
 const data = formInput
  const sendMessage = (e)=>{
    e.preventDefault()
    if (formInput.name === '' || formInput.email === '' || formInput.message === ''){
      dispatch({
        type : "MISSING_VALUE",
      })
    }else{

      dispatch({
        type:"SEND_MESSAGE",
        payload : data,
      })
      axios.post(process.env.REACT_APP_BASE_URL+'api/messages',data)
      .then((response)=>{

        dispatch({
          type:"SUCCESS",
          payload:response.data.message
        })
        setFormInput({...formInput,
        name : '',
        email : '',
        message : '',
        })
      }).catch((error)=>{
        if (error.response){
          dispatch({
            type:"ERROR",
            payload:error.response.data.message
          })
        }else if(error.request){
          dispatch({
            type:"ERROR",
            payload: 'Network Error'
          })
        }else{
          console.log(error)
        }
      })
      
    }

  }
  const closeModal = ()=>{
    dispatch({
      type: "CLOSE_MODAL",
    })
  }
  const spinner = <Loader type="ThreeDots" color="#271661" height={15} width={50} />

  const handleChange = (e)=>{
    let value = e.target.name
    setFormInput({
      ...formInput,
      [value]:e.target.value
    })
  }


  return (
    <ThemeProvider theme={themes}>
      <div className="d-flex flex-column align-items-center mb-5" style={{marginBottom:"70px"}}>
      <div>
      <StyledTypography
          fontsize="xlarge"
          color="secondary"
          fontfamily="primary"
          children="Send  Message"
          padding="nopadd"
          margin="nomarg"
        />
        {/* <HeaderStars /> */}
      {state.showAlert && <Alert message={state.message} closeModal={closeModal} />}
        <br></br>
        <form onSubmit ={sendMessage}>
          <div>
            <label htmlFor ="name"><StyledTypography color='secondary'>Name </StyledTypography>
            <input id="name" name ="name" type="text" value= {formInput.name} onChange={(e)=>handleChange(e)}/>
            </label>
          </div>
          <div>
            <label htmlFor="email"><StyledTypography color='secondary'>Email</StyledTypography>
            <input id ="email" name ="email" type="text" value= {formInput.email} onChange={(e)=>handleChange(e)}/>
            </label>
          </div>
          <div>
            <label htmlFor="message"><StyledTypography color='secondary'>Message</StyledTypography>
              <textarea name="message" id="" cols="40" rows="5" onChange={(e)=>handleChange(e)}
              value ={formInput.message}
              ></textarea>
            </label>
          </div>
            <StyledButton 
              color="primary" 
              fontweight= "secondary"
              backgroundColor="primary"
          >{state.isLoading? spinner:'Submit'}</StyledButton>
        </form>       
      </div>
      </div>
    </ThemeProvider>
  );
}
export default FooterSide;

const Alert = ({message, closeModal})=>{
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 4000);
  },)
  return<>
    <div>
      <StyledTypography color = 'warning'>{message}</StyledTypography>
    </div>
  </>
}