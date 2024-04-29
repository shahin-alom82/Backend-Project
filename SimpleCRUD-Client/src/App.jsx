
import Swal from 'sweetalert2'
import './App.css'
function App() {

  const handleSubmit = event => {

    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }
    console.log(user)

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "User Adedet Successfuly!",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })

  }



  return (
    <>
      <h1 className="text-center text-4xl mt-10">User Addedet Form </h1>
      <form onSubmit={handleSubmit} className="text-green-500 text-center text-2xl mt-5">
        <input className="border border-stone-950 p-2" type="text" name="name" id="" />
        <br />
        <input className="border border-stone-950 mt-6 p-2" type="email" name="email" id="" />
        <br />
        <input className="bg-green-300 w-[300px] text-white h-14" type="submit" value="update" id="" />
      </form>
    </>
  )
}

export default App
