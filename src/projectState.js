import shofipy from "./vedios/shofipy.mp4"
import craps from "./vedios/craps.mp4"
import calculator from "./vedios/calculator.mp4"
import chatapp from "./vedios/chatapp.mp4"

export const projectState = () => {
     return [
          {
               title: "Shopify",
               video: shofipy,
               id: "shopify",
               awards: [
                    {
                         title: "Deployment",
                         projectDescription:
                              'This project seamlessly combines a dynamic React frontend, hosted on GitHub Pages, with a responsive API backend deployed on Heroku.The backend, deployed on Heroku, facilitates data retrieval through Axios and incorporates efficient testing mechanisms using Jest.'
                    },
                    {
                         title: "MERN STACK ",
                         projectDescription:
                              "Shofipy is a modern web application project built using React . The project also integrates features such as data fetching using Axios, stylish and responsive UI components from Bootstrap and React Bootstrap, and notifications using React Notifications. "
                    },
                    {
                         title: "Functionallity",
                         projectDescription:
                              "Shofipy is equipped with the ability to generate static files and deploy them to GitHub Pages using the gh-pages package. The yup library aids in form validation. This project demonstrates a comprehensive integration of modern web development tools"
                    }
               ]
          },
          {
               title: "Chat Application",
               video: chatapp,
               id: "chatapp",
               awards: [
                    {
                         title: "Vercel",
                         projectDescription:
                              'Leveraging Vercel robust platform, the application ensures high availability and optimized performance. Users can engage in dynamic conversations, with messages delivered instantaneously.Using modern frontend technologies, and the reliability of Verce'
                    },
                    {
                         title: "MERN STACK ",
                         projectDescription:
                              "The application's sleek interface, built with React and enhanced by libraries such as Bootstrap.The project's backend is powered by a stack of technologies, including Express, MongoDB with Mongoose, and CORS for cross-origin resource sharing."
                    },
                    {
                         title: "Functionallity",
                         projectDescription:
                              "The integration of bcryptjs provides secure password hashing, enhancing user data protection.The implementation of joi enables thorough validation of incoming data, ensuring data integrity and minimizing the risk of invalid inputs jsonwebtoken"
                    }
               ]
          },
          {
               title: "Calculator",
               video: calculator,
               id: "calculator",
               awards: [
                    {
                         title: "HTML & CSS",
                         projectDescription:
                              ' Explore the perfect blend of CSS and HTML in our meticulously designed calculator. This web-based calculator combines visually appealing styles with functional HTML elements, offering a seamless and engaging tool for all your arithmetic needs.our calculator boasts a clean'
                    },
                    {
                         title: "JavaScript ",
                         projectDescription:
                              " Witness the synergy of JavaScript in our feature-rich calculator. This sophisticated web tool not only boasts an appealing design but also offers seamless functionality, making it an essential asset for your mathematical endeavors."
                    },
                    {
                         title: "Functionallity",
                         projectDescription:
                              " Experience the perfect marriage of aesthetics and usability in our calculator. With JavaScript working together, this calculator offers a visually pleasing interface combined with smooth functionality, making your calculations  efficient"
                    }
               ]
          },
          {
               title: "Craps Game",
               video: craps,
               id: "craps",
               awards: [
                    {
                         title: "HTML & CSS",
                         projectDescription:
                              'Craps Game Crafted with HTML, CSS, Bootstrap. The excitement of craps to your screen, letting you roll the dice and test your luck'
                    },
                    {
                         title: "JavaScript",
                         projectDescription:
                              " Meticulously designed with HTML, CSS, Bootstrap, and powered by JavaScript, this game offers a polished and enjoyable gaming experience."
                    },
                    {
                         title: "Functionallity",
                         projectDescription:
                              " Play from any device with a browser, and experience the thrill of craps.Whether you're a casual player or a gaming enthusiast. "
                    }
               ]
          },

     ]
}