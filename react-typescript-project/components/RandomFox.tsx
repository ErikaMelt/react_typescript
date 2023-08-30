// Generate a random number between 1 and 123
const randomNumber = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
    const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

    return <img width={320} height= "auto" src={image} className="rounded" />
};