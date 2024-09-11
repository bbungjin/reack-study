import Input from "../../atom/Input";
import Form from "../../atom/Form";
import { submitSupportFunc } from "../../utils";

const CustomForm = ()=>{
    const onSubmitHandler = (e) => {
        const data = submitSupportFunc(e);
        console.log(data)
    }
    return (
    <Form onSubmit={onSubmitHandler}>
        <Input name="name" required/><br/>
        <Input name="age"/><br/>
        <Input type="submit" />
    </Form>
    )
}
export default CustomForm;