import { useState } from "react"

const UserForm = ({ onSubmit, defaultName, defaultCity, defaultAvatar, inputContent }) => {
  const [name, setName] = useState(defaultName)
  const [city, setCity] = useState(defaultCity)
  const [avatar, setAvatar] = useState(defaultAvatar)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const content = { name, city, avatar }

    await onSubmit(content)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="city">Cidade:</label>
        <input
          type="text"
          name="city"
          placeholder="Digite sua cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="form">
        <label htmlFor="avatar">Foto:</label>
        <input
          type="text"
          name="avatar"
          placeholder="Insira um link de sua foto..."
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
        />
      </div>
      <input type="submit" value={inputContent} className="button" />
    </form>
  );
};

export default UserForm