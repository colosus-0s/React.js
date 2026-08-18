import Cards from "./components/Cards";
const App = () => {
  const jobs = [
    {
      logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      posted: "2 days ago",
      company: "Google",
      level: "Senior",
      role: "Software Engineer",
      type: "Full Time",
      pay: "$120/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      posted: "5 days ago",
      company: "Microsoft",
      level: "Junior",
      role: "Software Engineer",
      type: "Full Time",
      pay: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      posted: "1 day ago",
      company: "Amazon",
      level: "Mid-Level",
      role: "Software Development Engineer",
      type: "Full Time",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      posted: "3 days ago",
      company: "Meta",
      level: "Senior",
      role: "Frontend Engineer",
      type: "Full Time",
      pay: "$125/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      posted: "4 days ago",
      company: "Apple",
      level: "Mid-Level",
      role: "iOS Software Engineer",
      type: "Full Time",
      pay: "$110/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      posted: "6 days ago",
      company: "Netflix",
      level: "Senior",
      role: "Backend Engineer",
      type: "Full Time",
      pay: "$135/hr",
      location: "Mumbai, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      posted: "2 days ago",
      company: "NVIDIA",
      level: "Mid-Level",
      role: "Software Engineer",
      type: "Full Time",
      pay: "$105/hr",
      location: "Pune, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      posted: "7 days ago",
      company: "Adobe",
      level: "Junior",
      role: "Frontend Developer",
      type: "Part Time",
      pay: "$75/hr",
      location: "Noida, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
      posted: "3 days ago",
      company: "Salesforce",
      level: "Mid-Level",
      role: "Full Stack Engineer",
      type: "Full Time",
      pay: "$98/hr",
      location: "Bengaluru, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      posted: "5 days ago",
      company: "Oracle",
      level: "Junior",
      role: "Cloud Engineer",
      type: "Full Time",
      pay: "$80/hr",
      location: "Hyderabad, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      posted: "1 day ago",
      company: "IBM",
      level: "Mid-Level",
      role: "Cloud Software Engineer",
      type: "Full Time",
      pay: "$90/hr",
      location: "Pune, India",
    },
    {
      logo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
      posted: "4 days ago",
      company: "Uber",
      level: "Senior",
      role: "Backend Engineer",
      type: "Full Time",
      pay: "$115/hr",
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem,idx) {
        return <div key={idx}>
          <Cards
            logo={elem.logo}
            posted={elem.posted}
            company={elem.company}
            level={elem.level}
            role={elem.role}
            type={elem.type}
            pay={elem.pay}
            location={elem.location}
          />
        </div>
      })}
    </div>
  );
};

export default App;
