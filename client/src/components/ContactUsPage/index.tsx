import { useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { TextField } from "@mui/material";
import { Error, FormStyled, FormContainer, Submit, Sucsess } from "./styled"
import { HeaderTwo  } from "../styled";
import { MainPageContainer } from "../HomePage/styled"

interface IFormInput {
  name: string
  email: string
  message?: string
}

export const ContactUsPage = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const setContact = async (data: IFormInput) => {
        setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(data)
        });
      const result = await response.json();
      console.log(result);
      setUser(result.name)
    } catch (error) {
      console.error(error);
      if(error){
        setError((error as Error).message || "Unknown error")
      }
    }
  }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setContact(data)
    reset()
  }

  const sucsessmesage = user && `Thank you for your interest, ${user}`;

  return (
    <MainPageContainer $colored>
      {sucsessmesage ? (<Sucsess>{sucsessmesage}</Sucsess>) :
      (<>
      <HeaderTwo $colored>Only CTA on the page</HeaderTwo>
        <FormContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField label="Name" {...field} slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }} />}
            />
            {errors.name && <Error>This is required.</Error>}
            <Controller
              name="email"
              control={control}
              rules={{ required: true, pattern: (/^\S+@\S+$/i), }}
              render={({ field }) => <TextField sx={{marginTop:"15%"}} label="Email" {...field} slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}/>}
            />
            {errors.email?.type==="required" && <Error>This is required.</Error>}
            {errors.email?.type==="pattern" && <Error>This is incorrect e-mail.</Error>}
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField multiline rows={4} sx={{marginTop:"15%"}} label="Message" {...field} slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}/>}
            />
            {errors.message && <Error>This is required.</Error>}
            {error && <Error>Something is wrong, try submitting the form again.</Error>}
            {isLoading && <p>Loading...</p>}
            <Submit variant="contained" type="submit" sx={{textTransform:"none", marginTop:"10%"}}>Submit</Submit>
          </FormStyled>
        </FormContainer>
        </>)}
    </MainPageContainer>
  )
}