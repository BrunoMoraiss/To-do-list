import styled from 'styled-components';

type ContainerProps<type> = {
  done: type;
};

export const Container = styled.div(
  ({ done }: ContainerProps<boolean>) => `
display: flex;
background-color: #20212c;
gap: 7px;
padding: 10px;
border-radius: 10px;
margin: 8px 0px;
align-items: center;

label {
  color: #ccc;
  text-decoration: ${done ? 'line-through' : 'initial'};
}

input {
  width: 25px;
  height: 25px;
}
`,
);
