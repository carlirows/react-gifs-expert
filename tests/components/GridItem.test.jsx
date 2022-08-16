import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('test en GridItem Component', () => { 
    const title='Titulander'
    const url='https://www.elinmortal.com/'
    test('deberia hacer match copn el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     })
    test('deberia mostrar la imagen con el url y alt indicado', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        //screen.debug(): //por si necesito ver el sujeto de pruebas
        //expect(screen.getByRole('img').src).toBe(url)
        //expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img') 
        expect(src).toBe(url)
        expect(alt).toBe(title)
     })
    test('deberia mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText=(title)).toBeTruthy()
        
     })
 })