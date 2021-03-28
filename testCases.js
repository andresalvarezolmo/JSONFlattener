const JSON1 = {
    "a": 1,
    "b": true,
    "c": {
        "d": 3,
        "e": "test"
    }
}
const JSON1Flattened = { "a": 1, "b": true, "c.d": 3, "c.e": 'test' }

const JSON2 = {
    "a": "1",
    "b": false,
    "c": {
        "d": 3,
        "e": "test",
        "f": {
            "g": "hey",
            "h": {
                "i": "hola",
                "j": 4
            }
        }
    },
    "z": 1
}

const JSON2Flattened = {
    "a": '1',
    "b": false,
    "c.d": 3,
    "c.e": 'test',
    "c.f.g": 'hey',
    "c.f.h.i": 'hola',
    "c.f.h.j": 4,
    z: 1
}

const JSON3 = {
    "a": {
        "b": {
            "c": {
                "d": {
                    "e": {
                        "f": {
                            "g": {
                                "h": {
                                    "i": {
                                        "j": {
                                            "l": "thanks for reading until here :)"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const JSON3Flattened = {
    "a.b.c.d.e.f.g.h.i.j.l": "thanks for reading until here :)"
}

const JSON4 = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5
}

const JSON4Flattened = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5
}

const JSON5 = {
    "a": true,
    "b": {
        "c": false,
    },
    "d": true,
    "e": {
        "f": false
    },
    "g": 1,
    "h": {
        "i": "hello world"
    }
}

const JSON5Flattened = {
    "a": true,
    "b.c": false,
    "d": true,
    "e.f": false,
    "g": 1,
    "h.i": "hello world"
}
module.exports = { JSON1, JSON1Flattened, JSON2, JSON2Flattened, JSON3, JSON3Flattened, JSON4, JSON4Flattened, JSON5, JSON5Flattened };