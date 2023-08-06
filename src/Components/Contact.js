const Contact = () => {
    return (
      <div className="w-10/12 m-auto" >
        <h1 className="font-bold text-3xl p-2 m-2">Contact Us Page</h1>
        <form>
          <input
            type="text"
            className=" border border-black p-2 m-2 rounded-md"
            placeholder="name"
          />
          <input
            type="text"
            className=" border border-black p-2 m-2 rounded-md"
            placeholder="message"
          />
          <button className=" text-white p-2 m-2 bg-orange-400 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    );
  };
  export default Contact;