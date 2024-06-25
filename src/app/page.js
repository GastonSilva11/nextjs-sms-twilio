"use client";

const page = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData.get("message"));
    console.log(formData.get("phone"));

    const sms = {
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    alert("message sent");
  };

  return (
    <div className="flex item-center justify-center h-screen">
      <form className="bg-slate-900 p-10" onSubmit={onSubmit}>
        <h1 className="text-white text-3xl font-bold">Send an SMS</h1>
        <label htmlFor="" className="text-white block my-4">
          Write your number here:
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Write your number here"
          className="px-3 py-1 rounded-md block"
        />

        <label htmlFor="" className="text-white block my-4">
          Write your message here:
        </label>
        <textarea
          name="message"
          placeholder="Write your message here"
          className="px-3 py-1 rounded-md block w-full"
        ></textarea>

        <button className="bg-blue-500 text-white px-3 py-1 rounded-md block mt-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
