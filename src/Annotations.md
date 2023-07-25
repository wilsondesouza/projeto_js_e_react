### folders 
```
[
    {
        id: "1",
        name: "Matemática",
        pins: ["pin1", "pin2"]
    },
    {
        id: "2",
        name: "Trigonometria",
        pins: ["pin1", "pin2"]
    },
    {
        id: "3",
        name: "Programação",
        pins: ["pin1", "pin2", "pin3"]
    },
    {
        id: "4",
        name: "Arquitetura",
        pins: ["pin1", "pin2", "pin3", "pin4"]
    }
]
```

### Estado global
```
{
    folders: [{},{}],
    activePinId: "",
    mode: "savePin" | "createFolder",
    type: null
}
```

abreModalPin() -> { folders: [], activePin: "123", modal: "savePin" }
closeModal() -> { folders: [], modal: null, activePin: null }
savePinFolder("folder", "pin1") -> { folders: [{ id: "pin"}] }