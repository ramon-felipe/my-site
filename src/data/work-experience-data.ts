import IWorkExperienceModel from "../models/work-experience-model";

const workingExperienceData: IWorkExperienceModel[] = [
    {
        role: "Fullstack developer",
        company: "BTG Pactual",
        from: "01/06/2021",
        to: "current",
        city: "São Paulo",
        country: "Brasil",
        description: `BTG Pactual is an investment bank in Brazil.
        I integrate the onBoarding team, responsible for developing the systems the first receive the
        customers (data validation, profile checks, account creation, etc.).
        Working under SCRUM agile methodology as a Fullstack developer (.Net C# and React) I started
        helping the bank to conclude the development of a system responsible for verifying if a customer
        (person or company) were or weren't reportable to financial institutions.
        The system run a set of rules on the customer account data and saves the results in the MySQL
        database (EntityFramework as ORM).
        We used some design patterns to achieve good results like Factory method and Chain of
        Responsibility. The results are viewed by the bank analysts through a Web Page developed in
        React.
        Now, working in another team with 5 developers, 1 QA, and 2 POs, I develop a system that
        enables the creation of offshore (USA, Cayman, Colombia) customers accounts easily by using a
        Workflow. We use the .NET C# language and also React with Typescript to develop the front end
        page that is used to input the customers informations.
        There are a lot of microservices involved that our system uses so I also have to know a littleabout them to make the communication works perfectly.`
    },
    {
        role: "Backend developer",
        company: "Santander",
        from: "01/01/2020",
        to: "01/05/2021",
        city: "São Paulo",
        country: "Brasil",
        description: `emDia is a Santander Bank company. Its objective is offer clients an economic way to pay theirdebts by giving them good discounts.
        At first I worked as a senior test automation developer in QA area. But shortly (one month later),Istarted working as a software developer creating
        Web APIs using the .Net C# language.
        These web APIs consumed a public API to get clients financial informations. Some communicateswith
        AWS DynamoDB.
        Dapper was used as the ORM.
        I also performed maintenance of broker system developed in Node and TypeScript that usedsome AWS technologies (Amazon Web Services),
        such as:
        API Gateway, Lambda; S3; Dynamo; Cloudwatch, SNS.
        I Also helped the company emDia to implement a chatbot (IBM Watson) on its webpage; Creatingchatbot dialogs that consumed the Web APIs I had created before.`
    },
    {
        role: "Test engineer",
        company: "Bizapp",
        from: "01/10/2018",
        to: "01/12/2019",
        city: "São Paulo",
        country: "Brasil",
        description: `Working allocated in a client site (CIP - Interbank Payment Chamber) at Faria Lima - SP,automating functional tests using C#, Selenium and BDD (Specflow). Developing web interfacetests integrated with extent reports (generating report results with screen shots after testcompletion).
        SCRUM was used as agile methodology.`
    },
    {
        role: "Test engineer",
        company: "HDI Group",
        from: "01/04/2018",
        to: "01/10/2018",
        city: "São Paulo",
        country: "Brasil",
        description: `HDI Group is a company specialized in test automation.
        My role was QA automation developer. My main job was about creating automated tests for theUI Web solutions of our clients (a variaty of clients like retail and insurance companies).
        The test automation was done using Java, so at the same time I was developing the tests Ilearned a lot about TDD, Java, Selenium and Git.
        I worked in a team with more or less 10 people from the QA area (manual analists and testdevelopers).`
    },
    {
        role: "Software developer",
        company: "eDok",
        from: "01/01/2012",
        to: "01/07/2012",
        city: "São Paulo",
        country: "Brasil",
        description: `My second internship as a software developer (total of 2 years of internship).
        Edok is a startup that digitalizes phisical documents.
        It was my very first contact with an OOP programming language (PHP).
        I learned the basics of this language from the seniores of the project.
        I helped the team by giving support and developing basic to
        intermediate functions using the PHP programming language.
        The team was me and four seniores developers.`
    },
    {
        role: "Software developer",
        company: "Municipal secretary of sports",
        from: "01/01/2009",
        to: "01/12/2010",
        city: "São Paulo",
        country: "Brasil",
        description: `It was my first internship working as a software developer.
        I used to work four hours a day during the week giving support and developing basicmethods/functions using the VB.net programming language. 
        I started leaning better the usage of data structure such asArrays and loops such as While and For.`
    }
]

export default workingExperienceData;