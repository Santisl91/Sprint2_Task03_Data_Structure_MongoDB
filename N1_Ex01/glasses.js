
db.createCollection( 'glasses', {validator: {$jsonSchema: {bsonType: 'object',title:'glasses',required: [         'mark',          'frame_type',          'frame_color',          'price',          'prescription',          'lense_color',          'supplier',          'glasses'],properties: {mark: {bsonType: 'object',
title:'object',required: [         'name'],properties: {name: {bsonType: 'string'}}},frame_type: {enum: },frame_color: {enum: },price: {bsonType: 'int'},prescription: {bsonType: 'object',
title:'object',required: [         'rigth eye',          'left eye'],properties: {rigth eye: {bsonType: 'decimal'},left eye: {bsonType: 'decimal'}}},lense_color: {bsonType: 'object',
title:'object',required: [         'rigth eye',          'left eye'],properties: {rigth eye: {bsonType: 'string'},left eye: {bsonType: 'string'}}},supplier: {bsonType: 'objectId'},glasses: {bsonType: 'objectId'}}         }      }});  