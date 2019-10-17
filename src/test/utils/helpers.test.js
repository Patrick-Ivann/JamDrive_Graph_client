import { isFileProsit, isFunction, isFileTypeValid } from "../../utils/helpers";

test('pass ressource to isFileProsit equal true', () => {
    expect(isFileProsit("prosit")).toBe(true)
})


test('pass ressource to isFileProsit equal false', () => {
    expect(isFileProsit("ressource")).toBe(false)
})

test('pass a function to is function equal true ', () => {
    function mockFunction() {
        return "test";
    }
      expect(isFunction(mockFunction)).toBe(true)  

})
test('pass a string to is function equal false ', () => {
  expect(isFunction("string")).toBe(false)  
})

test('pass a valid fileTitle with .docx extension to isFileTypeValid equal true ', () => {
    
      expect(isFileTypeValid("1_Prosit_Annuaire_retour.docx")).toBe(true)  

})
test('pass an invalid fileTitle with wrong extension to isFileTypeValid equal false ', () => {
    expect(isFileTypeValid("1_Prosit_Annuaire_retour.pdf")).toBe(false)  
})