interface Props {
  firstName: string;
}

const EmailTemplate = ({ firstName }: Props) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default EmailTemplate;
