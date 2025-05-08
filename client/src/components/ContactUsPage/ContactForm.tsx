import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { TextField } from "@mui/material";
import { Error, FormStyled, FormContainer, Submit, Sucsess } from "./styled"
import { HeaderTwo  } from "../styled";
import { MainPageContainer } from '../HomePage/styled'

interface IFormInput {
  firstName: string
  email: string
  message?: string
}

export const ContactForm = () => {
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
    reset()
  }

  const sucsessmesage = "sucsess";

  return (
    <MainPageContainer $colored>
      {sucsessmesage ? (<Sucsess>{sucsessmesage}</Sucsess>) :
      (<>
      <HeaderTwo $colored>Only CTA on the page</HeaderTwo>
        <FormContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <TextField label="Name" {...field} slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }} />}
            />
            {errors.firstName && <Error>This is required.</Error>}
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
            {errors.email?.type==='required' && <Error>This is required.</Error>}
            {errors.email?.type==='pattern' && <Error>This is incorrect e-mail.</Error>}
            <Controller
              name="message"
              control={control}
              render={({ field }) => <TextField multiline rows={4}  sx={{marginTop:"15%"}} label="Message" {...field} slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}/>}
            />
            {/* <Error>Something is wrong, try submitting the form again.</Error> */}
            <Submit variant="contained" type="submit" sx={{textTransform:"none", marginTop:"10%"}}>Submit</Submit>
          </FormStyled>
        </FormContainer>
        </>)}
    </MainPageContainer>
  )
}