import Input from "./UI/myinput/Input";

const Form = ({post, setPost, children}) => {


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
                type="date"
                placeholder="Date birth"/>
            <select
                value={post.sex}
                onChange={e => setPost({...post, sex: e.target.value})}
            >
                <option disabled value="">Choose sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
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