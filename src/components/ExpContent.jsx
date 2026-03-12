const ExpContent = ({ expContent }) => {
  return (
    <div className="card-border rounded-xl p-10">
      <h1 className="font-semibold text-3xl">{expContent.title}</h1>
      <p>{expContent.date}</p>
      <p className="text-white-50">Responsibilities</p>
      <ul className="list-disc ms-5 text-white-50">
        {expContent.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      {expContent.link ? (
        <a
          href={expContent.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm"
        >
          {expContent.company ?? expContent.link}
        </a>
      ) : null}
    </div>
  );
};

export default ExpContent;
