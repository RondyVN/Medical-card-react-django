import Input from "./UI/myinput/Input";
import MySelect from "./UI/MySelect/MySelect";
import {useState} from "react";

const Form = ({post, setPost, children}) => {
    const [type, setType] = useState('text')
    return (
        <form>
            <Input
                value={post.first_name}
                onChange={e => setPost({...post, first_name: e.target.value})}
                type="text"
                placeholder="First Name"
            />
            <Input
                value={post.last_name}
                onChange={e => setPost({...post, last_name: e.target.value})}
                type="text"
                placeholder="Last Name"/>
            <Input
                value={post.date_birth}
                onChange={e => setPost({...post, date_birth: e.target.value})}
                type={type}
                max={new Date().toJSON().slice(0, 10)}
                onFocus={() => setType('date')}
                onBlur={() => setType('text')}
                placeholder="Date birth"/>
            <MySelect
                defaultValue={'Select gender'}
                value={post.sex}
                onChange={e => setPost({...post, sex: e})}
                option={[
                    {value: 'Male', name: 'Male'},
                    {value: 'Female', name: 'Female'},
                ]}
            />
            <Input
                value={post.country}
                onChange={e => setPost({...post, country: e.target.value})}
                type="text"
                placeholder="Country"/>
            <Input
                value={post.state}
                onChange={e => setPost({...post, state: e.target.value})}
                type="text"
                placeholder="State"/>
            <Input
                value={post.address}
                onChange={e => setPost({...post, address: e.target.value})}
                type="text"
                placeholder="Address"/>
            {children}
        </form>
    );
};

export default Form;