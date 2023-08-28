const Header = (name) => {

  return (
    <h1>{name.course}</h1>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  );
};


const Content = ({props}) => {
  return (
    <div>
      <Part part={props[0].name} exercise={props[0].exercises} />
      <Part part={props[1].name} exercise={props[1].exercises} />
      <Part part={props[2].name} exercise={props[2].exercises} />
    </div>
  );
};


const Total = ({ props }) => {
  const sum = props[0].exercises + props[1].exercises + props[2].exercises

  return (
    <p>Number of exercises: {sum}</p>
  );
}


const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content props={course.parts}/>
      <Total props={course.parts} />
    </div>
  )
}

export default App