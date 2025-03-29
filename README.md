# Vemto TypeScript Entity

> This is a [Vemto](https://vemto.app) plugin. Vemto is a GUI [Laravel](https://laravel.com) generator with a complete set of tools for starting new [Laravel](https://laravel.com) projects. 

Vemto TypeScript Entity plugin to generate entities from Laravel to TypeScript.

## Settings

This plugin has only three simple settings:

1. ```Export entity type class:``` You can export the entity as a class or an interface. By default it is exported in interface.
2. ```Export entity for React .tsx:``` If you are using React with typescript for the Frontend part, you can enable it to generate .tsx entities. 
3. ```Enable TypeORM entities:``` If you are using NestJS or TypeORM, enable this option to easily generate the entities.

### Entities will be generated in the following project path: ```app/TypeScript```


## Result

### 1. Export entity type class: ```Client.entity.ts```
-----
```typescript
/**
* Homeflow Technologies | ClientEntity.
*
* @property first_name
* @property last_name
* @property address
* @property telephone
*
* Create ClientEntity
*/

export class ClientEntity {
  first_name: string;
  last_name: string;
  address: string;
  telephone: string;
}

or 

/**
* Homeflow Technologies | ClientEntity.
*
* @property first_name
* @property last_name
* @property address
* @property telephone
*
* Create ClientEntity
*/

export interface ClientEntity {
  first_name: string;
  last_name: string;
  address: string;
  telephone: string;
}
```

### 2. Export entity for React: ```Client.entity.tsx```
-----
```typescript

/**
* Homeflow Technologies | ClientEntity.
*
* @property first_name
* @property last_name
* @property address
* @property telephone
*
* Create ClientEntity
*/

export interface ClientEntity {
  first_name: string;
  last_name: string;
  address: string;
  telephone: string;
}
```

### 3. Enable TypeORM entities: ```Client.entity.ts```
-----
```typescript
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
/**
* Homeflow Technologies | ClientEntity.
*
* @property first_name
* @property last_name
* @property address
* @property telephone
*
* Create ClientEntity
*/

@Entity()
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  address: string;

  @Column()
  telephone: string;
}
```
