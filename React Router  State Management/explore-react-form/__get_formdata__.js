/* 
1. using on submit-> make a func handleSubmit,get a parameter e or event then console -> e.target.[input name].value 
2. using action-> make a func handleFormData,get a parameter formData then console -> formData.get('[input_name]') 
3. controlled componennt-> catch change value using onChange into the input field -> used to handle dynamically handle error
4. handle all input field on a state object like:
const [formdata,setFormdata] = useState({name: '',password: '',phone: ''})
5.(uncontrolled) using state -> useRef()

*/