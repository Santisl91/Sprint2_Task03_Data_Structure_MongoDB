
db.createCollection( 'sells', {validator: {$jsonSchema: {bsonType: 'object',title:'sells',required: [         'glasses',          'amployee',          'customer',          'supplier'],properties: {glasses: {bsonType: 'objectId'},amployee: {bsonType: 'string'},customer: {bsonType: 'object',
title:'object',required: [         '_idClientes',          'nombre',          'cp',          'phone',          'email',          'register day',          'referrer'],properties: {_idClientes: {bsonType: 'int'},nombre: {bsonType: 'string'},cp: {bsonType: 'int'},phone: {bsonType: 'int'},email: {bsonType: 'string'},register day: {bsonType: 'date'},referrer: {bsonType: 'object',
title:'object',required: [         'id_referrer',          'referrer name'],properties: {id_referrer: {bsonType: 'int'},referrer name: {bsonType: 'string'}}}}},supplier: {bsonType: 'objectId'}}         }      }});  