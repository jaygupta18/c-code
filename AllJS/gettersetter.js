class user{
    constructor(username,password){
        this.username=username;
        this.password=password;

    }
    get password(){
       return `${this._passwordpassword.toUpperCase()}hitesh`
    }
    set password(value){
        this._password=value;
    }
}
const hitesh = new user("jay gupta","abc")
console.log(hitesh.password)
