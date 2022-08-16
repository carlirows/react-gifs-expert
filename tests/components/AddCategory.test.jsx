import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en <addcategory/>', () => { 
    test('debe de cambiar el valor de la caja e texto', () => { 
        render( <AddCategory onNewCategory={()=>{}}/>)
        //screen.debug();
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target: { value: 'Saitama'} } );
        expect(input.value).toBe('Saitama')
     })
    test('debe llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        //levanto mi sujeto de pruebas
        render( <AddCategory onNewCategory={onNewCategory}/>)
        //cojo la referencia a la caja de texto y el formulario
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        //disparo un evento en la caja de texto done le cambio el valor a inputValue
        fireEvent.input( input, { target: { value : inputValue}})
        //disparo un evento en el formulario que ejecuta mi funcion onSubmit
        fireEvent.submit( form )
        //mi funcion luego e ejevutarse limpia el input, asi que el valor del input debe ser string vacio
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue)

    })
    test('No debe llamar  el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn()
        render( <AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')
        fireEvent.submit( form )
        
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
     })
 })