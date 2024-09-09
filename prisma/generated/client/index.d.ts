
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model jabatan
 * 
 */
export type jabatan = $Result.DefaultSelection<Prisma.$jabatanPayload>
/**
 * Model sktm
 * 
 */
export type sktm = $Result.DefaultSelection<Prisma.$sktmPayload>
/**
 * Model belumNikah
 * 
 */
export type belumNikah = $Result.DefaultSelection<Prisma.$belumNikahPayload>
/**
 * Model skck
 * 
 */
export type skck = $Result.DefaultSelection<Prisma.$skckPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.jabatan`: Exposes CRUD operations for the **jabatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jabatans
    * const jabatans = await prisma.jabatan.findMany()
    * ```
    */
  get jabatan(): Prisma.jabatanDelegate<ExtArgs>;

  /**
   * `prisma.sktm`: Exposes CRUD operations for the **sktm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sktms
    * const sktms = await prisma.sktm.findMany()
    * ```
    */
  get sktm(): Prisma.sktmDelegate<ExtArgs>;

  /**
   * `prisma.belumNikah`: Exposes CRUD operations for the **belumNikah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BelumNikahs
    * const belumNikahs = await prisma.belumNikah.findMany()
    * ```
    */
  get belumNikah(): Prisma.belumNikahDelegate<ExtArgs>;

  /**
   * `prisma.skck`: Exposes CRUD operations for the **skck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skcks
    * const skcks = await prisma.skck.findMany()
    * ```
    */
  get skck(): Prisma.skckDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    jabatan: 'jabatan',
    sktm: 'sktm',
    belumNikah: 'belumNikah',
    skck: 'skck'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "jabatan" | "sktm" | "belumNikah" | "skck"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      jabatan: {
        payload: Prisma.$jabatanPayload<ExtArgs>
        fields: Prisma.jabatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jabatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jabatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          findFirst: {
            args: Prisma.jabatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jabatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          findMany: {
            args: Prisma.jabatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>[]
          }
          create: {
            args: Prisma.jabatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          createMany: {
            args: Prisma.jabatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jabatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          update: {
            args: Prisma.jabatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          deleteMany: {
            args: Prisma.jabatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jabatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jabatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jabatanPayload>
          }
          aggregate: {
            args: Prisma.JabatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJabatan>
          }
          groupBy: {
            args: Prisma.jabatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JabatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.jabatanCountArgs<ExtArgs>
            result: $Utils.Optional<JabatanCountAggregateOutputType> | number
          }
        }
      }
      sktm: {
        payload: Prisma.$sktmPayload<ExtArgs>
        fields: Prisma.sktmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sktmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sktmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          findFirst: {
            args: Prisma.sktmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sktmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          findMany: {
            args: Prisma.sktmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>[]
          }
          create: {
            args: Prisma.sktmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          createMany: {
            args: Prisma.sktmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sktmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          update: {
            args: Prisma.sktmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          deleteMany: {
            args: Prisma.sktmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sktmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sktmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sktmPayload>
          }
          aggregate: {
            args: Prisma.SktmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSktm>
          }
          groupBy: {
            args: Prisma.sktmGroupByArgs<ExtArgs>
            result: $Utils.Optional<SktmGroupByOutputType>[]
          }
          count: {
            args: Prisma.sktmCountArgs<ExtArgs>
            result: $Utils.Optional<SktmCountAggregateOutputType> | number
          }
        }
      }
      belumNikah: {
        payload: Prisma.$belumNikahPayload<ExtArgs>
        fields: Prisma.belumNikahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.belumNikahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.belumNikahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          findFirst: {
            args: Prisma.belumNikahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.belumNikahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          findMany: {
            args: Prisma.belumNikahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>[]
          }
          create: {
            args: Prisma.belumNikahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          createMany: {
            args: Prisma.belumNikahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.belumNikahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          update: {
            args: Prisma.belumNikahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          deleteMany: {
            args: Prisma.belumNikahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.belumNikahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.belumNikahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$belumNikahPayload>
          }
          aggregate: {
            args: Prisma.BelumNikahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBelumNikah>
          }
          groupBy: {
            args: Prisma.belumNikahGroupByArgs<ExtArgs>
            result: $Utils.Optional<BelumNikahGroupByOutputType>[]
          }
          count: {
            args: Prisma.belumNikahCountArgs<ExtArgs>
            result: $Utils.Optional<BelumNikahCountAggregateOutputType> | number
          }
        }
      }
      skck: {
        payload: Prisma.$skckPayload<ExtArgs>
        fields: Prisma.skckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          findFirst: {
            args: Prisma.skckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          findMany: {
            args: Prisma.skckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>[]
          }
          create: {
            args: Prisma.skckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          createMany: {
            args: Prisma.skckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          update: {
            args: Prisma.skckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          deleteMany: {
            args: Prisma.skckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skckPayload>
          }
          aggregate: {
            args: Prisma.SkckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkck>
          }
          groupBy: {
            args: Prisma.skckGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkckGroupByOutputType>[]
          }
          count: {
            args: Prisma.skckCountArgs<ExtArgs>
            result: $Utils.Optional<SkckCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sktm: number
    sktm_createdBy: number
    belumNikah: number
    nikah_createdBy: number
    skck: number
    skck_createdBy: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sktm?: boolean | UsersCountOutputTypeCountSktmArgs
    sktm_createdBy?: boolean | UsersCountOutputTypeCountSktm_createdByArgs
    belumNikah?: boolean | UsersCountOutputTypeCountBelumNikahArgs
    nikah_createdBy?: boolean | UsersCountOutputTypeCountNikah_createdByArgs
    skck?: boolean | UsersCountOutputTypeCountSkckArgs
    skck_createdBy?: boolean | UsersCountOutputTypeCountSkck_createdByArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSktmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sktmWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSktm_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sktmWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBelumNikahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: belumNikahWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNikah_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: belumNikahWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSkckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skckWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSkck_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skckWhereInput
  }


  /**
   * Count Type JabatanCountOutputType
   */

  export type JabatanCountOutputType = {
    users: number
  }

  export type JabatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | JabatanCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JabatanCountOutputType
     */
    select?: JabatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JabatanCountOutputType without action
   */
  export type JabatanCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    user_jabatan: number | null
    user_level: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    user_jabatan: number | null
    user_level: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    user_nama: string | null
    user_nip: string | null
    user_email: string | null
    user_hp: string | null
    user_image: string | null
    user_alamat: string | null
    user_jabatan: number | null
    user_name: string | null
    user_pass: string | null
    user_level: number | null
    user_lastip: string | null
    user_lastlogin: string | null
    user_created: Date | null
    user_updated: Date | null
    user_deleted: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    user_nama: string | null
    user_nip: string | null
    user_email: string | null
    user_hp: string | null
    user_image: string | null
    user_alamat: string | null
    user_jabatan: number | null
    user_name: string | null
    user_pass: string | null
    user_level: number | null
    user_lastip: string | null
    user_lastlogin: string | null
    user_created: Date | null
    user_updated: Date | null
    user_deleted: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    user_nama: number
    user_nip: number
    user_email: number
    user_hp: number
    user_image: number
    user_alamat: number
    user_jabatan: number
    user_name: number
    user_pass: number
    user_level: number
    user_lastip: number
    user_lastlogin: number
    user_created: number
    user_updated: number
    user_deleted: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    user_jabatan?: true
    user_level?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    user_jabatan?: true
    user_level?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    user_nama?: true
    user_nip?: true
    user_email?: true
    user_hp?: true
    user_image?: true
    user_alamat?: true
    user_jabatan?: true
    user_name?: true
    user_pass?: true
    user_level?: true
    user_lastip?: true
    user_lastlogin?: true
    user_created?: true
    user_updated?: true
    user_deleted?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    user_nama?: true
    user_nip?: true
    user_email?: true
    user_hp?: true
    user_image?: true
    user_alamat?: true
    user_jabatan?: true
    user_name?: true
    user_pass?: true
    user_level?: true
    user_lastip?: true
    user_lastlogin?: true
    user_created?: true
    user_updated?: true
    user_deleted?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    user_nama?: true
    user_nip?: true
    user_email?: true
    user_hp?: true
    user_image?: true
    user_alamat?: true
    user_jabatan?: true
    user_name?: true
    user_pass?: true
    user_level?: true
    user_lastip?: true
    user_lastlogin?: true
    user_created?: true
    user_updated?: true
    user_deleted?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    user_nama: string
    user_nip: string | null
    user_email: string | null
    user_hp: string
    user_image: string | null
    user_alamat: string
    user_jabatan: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip: string | null
    user_lastlogin: string | null
    user_created: Date
    user_updated: Date
    user_deleted: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_nama?: boolean
    user_nip?: boolean
    user_email?: boolean
    user_hp?: boolean
    user_image?: boolean
    user_alamat?: boolean
    user_jabatan?: boolean
    user_name?: boolean
    user_pass?: boolean
    user_level?: boolean
    user_lastip?: boolean
    user_lastlogin?: boolean
    user_created?: boolean
    user_updated?: boolean
    user_deleted?: boolean
    jabatan?: boolean | users$jabatanArgs<ExtArgs>
    sktm?: boolean | users$sktmArgs<ExtArgs>
    sktm_createdBy?: boolean | users$sktm_createdByArgs<ExtArgs>
    belumNikah?: boolean | users$belumNikahArgs<ExtArgs>
    nikah_createdBy?: boolean | users$nikah_createdByArgs<ExtArgs>
    skck?: boolean | users$skckArgs<ExtArgs>
    skck_createdBy?: boolean | users$skck_createdByArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    user_id?: boolean
    user_nama?: boolean
    user_nip?: boolean
    user_email?: boolean
    user_hp?: boolean
    user_image?: boolean
    user_alamat?: boolean
    user_jabatan?: boolean
    user_name?: boolean
    user_pass?: boolean
    user_level?: boolean
    user_lastip?: boolean
    user_lastlogin?: boolean
    user_created?: boolean
    user_updated?: boolean
    user_deleted?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jabatan?: boolean | users$jabatanArgs<ExtArgs>
    sktm?: boolean | users$sktmArgs<ExtArgs>
    sktm_createdBy?: boolean | users$sktm_createdByArgs<ExtArgs>
    belumNikah?: boolean | users$belumNikahArgs<ExtArgs>
    nikah_createdBy?: boolean | users$nikah_createdByArgs<ExtArgs>
    skck?: boolean | users$skckArgs<ExtArgs>
    skck_createdBy?: boolean | users$skck_createdByArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      jabatan: Prisma.$jabatanPayload<ExtArgs> | null
      sktm: Prisma.$sktmPayload<ExtArgs>[]
      sktm_createdBy: Prisma.$sktmPayload<ExtArgs>[]
      belumNikah: Prisma.$belumNikahPayload<ExtArgs>[]
      nikah_createdBy: Prisma.$belumNikahPayload<ExtArgs>[]
      skck: Prisma.$skckPayload<ExtArgs>[]
      skck_createdBy: Prisma.$skckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_nama: string
      user_nip: string | null
      user_email: string | null
      user_hp: string
      user_image: string | null
      user_alamat: string
      user_jabatan: number | null
      user_name: string
      user_pass: string
      user_level: number
      user_lastip: string | null
      user_lastlogin: string | null
      user_created: Date
      user_updated: Date
      user_deleted: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jabatan<T extends users$jabatanArgs<ExtArgs> = {}>(args?: Subset<T, users$jabatanArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    sktm<T extends users$sktmArgs<ExtArgs> = {}>(args?: Subset<T, users$sktmArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findMany"> | Null>
    sktm_createdBy<T extends users$sktm_createdByArgs<ExtArgs> = {}>(args?: Subset<T, users$sktm_createdByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findMany"> | Null>
    belumNikah<T extends users$belumNikahArgs<ExtArgs> = {}>(args?: Subset<T, users$belumNikahArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findMany"> | Null>
    nikah_createdBy<T extends users$nikah_createdByArgs<ExtArgs> = {}>(args?: Subset<T, users$nikah_createdByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findMany"> | Null>
    skck<T extends users$skckArgs<ExtArgs> = {}>(args?: Subset<T, users$skckArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findMany"> | Null>
    skck_createdBy<T extends users$skck_createdByArgs<ExtArgs> = {}>(args?: Subset<T, users$skck_createdByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly user_nama: FieldRef<"users", 'String'>
    readonly user_nip: FieldRef<"users", 'String'>
    readonly user_email: FieldRef<"users", 'String'>
    readonly user_hp: FieldRef<"users", 'String'>
    readonly user_image: FieldRef<"users", 'String'>
    readonly user_alamat: FieldRef<"users", 'String'>
    readonly user_jabatan: FieldRef<"users", 'Int'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly user_pass: FieldRef<"users", 'String'>
    readonly user_level: FieldRef<"users", 'Int'>
    readonly user_lastip: FieldRef<"users", 'String'>
    readonly user_lastlogin: FieldRef<"users", 'String'>
    readonly user_created: FieldRef<"users", 'DateTime'>
    readonly user_updated: FieldRef<"users", 'DateTime'>
    readonly user_deleted: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.jabatan
   */
  export type users$jabatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    where?: jabatanWhereInput
  }

  /**
   * users.sktm
   */
  export type users$sktmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    where?: sktmWhereInput
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    cursor?: sktmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SktmScalarFieldEnum | SktmScalarFieldEnum[]
  }

  /**
   * users.sktm_createdBy
   */
  export type users$sktm_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    where?: sktmWhereInput
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    cursor?: sktmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SktmScalarFieldEnum | SktmScalarFieldEnum[]
  }

  /**
   * users.belumNikah
   */
  export type users$belumNikahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    where?: belumNikahWhereInput
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    cursor?: belumNikahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BelumNikahScalarFieldEnum | BelumNikahScalarFieldEnum[]
  }

  /**
   * users.nikah_createdBy
   */
  export type users$nikah_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    where?: belumNikahWhereInput
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    cursor?: belumNikahWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BelumNikahScalarFieldEnum | BelumNikahScalarFieldEnum[]
  }

  /**
   * users.skck
   */
  export type users$skckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    where?: skckWhereInput
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    cursor?: skckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkckScalarFieldEnum | SkckScalarFieldEnum[]
  }

  /**
   * users.skck_createdBy
   */
  export type users$skck_createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    where?: skckWhereInput
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    cursor?: skckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkckScalarFieldEnum | SkckScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model jabatan
   */

  export type AggregateJabatan = {
    _count: JabatanCountAggregateOutputType | null
    _avg: JabatanAvgAggregateOutputType | null
    _sum: JabatanSumAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  export type JabatanAvgAggregateOutputType = {
    jabatan_id: number | null
  }

  export type JabatanSumAggregateOutputType = {
    jabatan_id: number | null
  }

  export type JabatanMinAggregateOutputType = {
    jabatan_id: number | null
    jabatan_nama: string | null
    jabatan_created: Date | null
    jabatan_updated: Date | null
    jabatan_deleted: Date | null
  }

  export type JabatanMaxAggregateOutputType = {
    jabatan_id: number | null
    jabatan_nama: string | null
    jabatan_created: Date | null
    jabatan_updated: Date | null
    jabatan_deleted: Date | null
  }

  export type JabatanCountAggregateOutputType = {
    jabatan_id: number
    jabatan_nama: number
    jabatan_created: number
    jabatan_updated: number
    jabatan_deleted: number
    _all: number
  }


  export type JabatanAvgAggregateInputType = {
    jabatan_id?: true
  }

  export type JabatanSumAggregateInputType = {
    jabatan_id?: true
  }

  export type JabatanMinAggregateInputType = {
    jabatan_id?: true
    jabatan_nama?: true
    jabatan_created?: true
    jabatan_updated?: true
    jabatan_deleted?: true
  }

  export type JabatanMaxAggregateInputType = {
    jabatan_id?: true
    jabatan_nama?: true
    jabatan_created?: true
    jabatan_updated?: true
    jabatan_deleted?: true
  }

  export type JabatanCountAggregateInputType = {
    jabatan_id?: true
    jabatan_nama?: true
    jabatan_created?: true
    jabatan_updated?: true
    jabatan_deleted?: true
    _all?: true
  }

  export type JabatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jabatan to aggregate.
     */
    where?: jabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jabatans to fetch.
     */
    orderBy?: jabatanOrderByWithRelationInput | jabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jabatans
    **/
    _count?: true | JabatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JabatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JabatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JabatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JabatanMaxAggregateInputType
  }

  export type GetJabatanAggregateType<T extends JabatanAggregateArgs> = {
        [P in keyof T & keyof AggregateJabatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJabatan[P]>
      : GetScalarType<T[P], AggregateJabatan[P]>
  }




  export type jabatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jabatanWhereInput
    orderBy?: jabatanOrderByWithAggregationInput | jabatanOrderByWithAggregationInput[]
    by: JabatanScalarFieldEnum[] | JabatanScalarFieldEnum
    having?: jabatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JabatanCountAggregateInputType | true
    _avg?: JabatanAvgAggregateInputType
    _sum?: JabatanSumAggregateInputType
    _min?: JabatanMinAggregateInputType
    _max?: JabatanMaxAggregateInputType
  }

  export type JabatanGroupByOutputType = {
    jabatan_id: number
    jabatan_nama: string
    jabatan_created: Date
    jabatan_updated: Date
    jabatan_deleted: Date | null
    _count: JabatanCountAggregateOutputType | null
    _avg: JabatanAvgAggregateOutputType | null
    _sum: JabatanSumAggregateOutputType | null
    _min: JabatanMinAggregateOutputType | null
    _max: JabatanMaxAggregateOutputType | null
  }

  type GetJabatanGroupByPayload<T extends jabatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JabatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JabatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JabatanGroupByOutputType[P]>
            : GetScalarType<T[P], JabatanGroupByOutputType[P]>
        }
      >
    >


  export type jabatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    jabatan_id?: boolean
    jabatan_nama?: boolean
    jabatan_created?: boolean
    jabatan_updated?: boolean
    jabatan_deleted?: boolean
    users?: boolean | jabatan$usersArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jabatan"]>


  export type jabatanSelectScalar = {
    jabatan_id?: boolean
    jabatan_nama?: boolean
    jabatan_created?: boolean
    jabatan_updated?: boolean
    jabatan_deleted?: boolean
  }

  export type jabatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | jabatan$usersArgs<ExtArgs>
    _count?: boolean | JabatanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $jabatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jabatan"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      jabatan_id: number
      jabatan_nama: string
      jabatan_created: Date
      jabatan_updated: Date
      jabatan_deleted: Date | null
    }, ExtArgs["result"]["jabatan"]>
    composites: {}
  }

  type jabatanGetPayload<S extends boolean | null | undefined | jabatanDefaultArgs> = $Result.GetResult<Prisma.$jabatanPayload, S>

  type jabatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jabatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JabatanCountAggregateInputType | true
    }

  export interface jabatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jabatan'], meta: { name: 'jabatan' } }
    /**
     * Find zero or one Jabatan that matches the filter.
     * @param {jabatanFindUniqueArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jabatanFindUniqueArgs>(args: SelectSubset<T, jabatanFindUniqueArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jabatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {jabatanFindUniqueOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jabatanFindUniqueOrThrowArgs>(args: SelectSubset<T, jabatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanFindFirstArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jabatanFindFirstArgs>(args?: SelectSubset<T, jabatanFindFirstArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jabatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanFindFirstOrThrowArgs} args - Arguments to find a Jabatan
     * @example
     * // Get one Jabatan
     * const jabatan = await prisma.jabatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jabatanFindFirstOrThrowArgs>(args?: SelectSubset<T, jabatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jabatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jabatans
     * const jabatans = await prisma.jabatan.findMany()
     * 
     * // Get first 10 Jabatans
     * const jabatans = await prisma.jabatan.findMany({ take: 10 })
     * 
     * // Only select the `jabatan_id`
     * const jabatanWithJabatan_idOnly = await prisma.jabatan.findMany({ select: { jabatan_id: true } })
     * 
     */
    findMany<T extends jabatanFindManyArgs>(args?: SelectSubset<T, jabatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jabatan.
     * @param {jabatanCreateArgs} args - Arguments to create a Jabatan.
     * @example
     * // Create one Jabatan
     * const Jabatan = await prisma.jabatan.create({
     *   data: {
     *     // ... data to create a Jabatan
     *   }
     * })
     * 
     */
    create<T extends jabatanCreateArgs>(args: SelectSubset<T, jabatanCreateArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jabatans.
     * @param {jabatanCreateManyArgs} args - Arguments to create many Jabatans.
     * @example
     * // Create many Jabatans
     * const jabatan = await prisma.jabatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jabatanCreateManyArgs>(args?: SelectSubset<T, jabatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jabatan.
     * @param {jabatanDeleteArgs} args - Arguments to delete one Jabatan.
     * @example
     * // Delete one Jabatan
     * const Jabatan = await prisma.jabatan.delete({
     *   where: {
     *     // ... filter to delete one Jabatan
     *   }
     * })
     * 
     */
    delete<T extends jabatanDeleteArgs>(args: SelectSubset<T, jabatanDeleteArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jabatan.
     * @param {jabatanUpdateArgs} args - Arguments to update one Jabatan.
     * @example
     * // Update one Jabatan
     * const jabatan = await prisma.jabatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jabatanUpdateArgs>(args: SelectSubset<T, jabatanUpdateArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jabatans.
     * @param {jabatanDeleteManyArgs} args - Arguments to filter Jabatans to delete.
     * @example
     * // Delete a few Jabatans
     * const { count } = await prisma.jabatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jabatanDeleteManyArgs>(args?: SelectSubset<T, jabatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jabatans
     * const jabatan = await prisma.jabatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jabatanUpdateManyArgs>(args: SelectSubset<T, jabatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jabatan.
     * @param {jabatanUpsertArgs} args - Arguments to update or create a Jabatan.
     * @example
     * // Update or create a Jabatan
     * const jabatan = await prisma.jabatan.upsert({
     *   create: {
     *     // ... data to create a Jabatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jabatan we want to update
     *   }
     * })
     */
    upsert<T extends jabatanUpsertArgs>(args: SelectSubset<T, jabatanUpsertArgs<ExtArgs>>): Prisma__jabatanClient<$Result.GetResult<Prisma.$jabatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jabatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanCountArgs} args - Arguments to filter Jabatans to count.
     * @example
     * // Count the number of Jabatans
     * const count = await prisma.jabatan.count({
     *   where: {
     *     // ... the filter for the Jabatans we want to count
     *   }
     * })
    **/
    count<T extends jabatanCountArgs>(
      args?: Subset<T, jabatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JabatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JabatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JabatanAggregateArgs>(args: Subset<T, JabatanAggregateArgs>): Prisma.PrismaPromise<GetJabatanAggregateType<T>>

    /**
     * Group by Jabatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jabatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jabatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jabatanGroupByArgs['orderBy'] }
        : { orderBy?: jabatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jabatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJabatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jabatan model
   */
  readonly fields: jabatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jabatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jabatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends jabatan$usersArgs<ExtArgs> = {}>(args?: Subset<T, jabatan$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jabatan model
   */ 
  interface jabatanFieldRefs {
    readonly jabatan_id: FieldRef<"jabatan", 'Int'>
    readonly jabatan_nama: FieldRef<"jabatan", 'String'>
    readonly jabatan_created: FieldRef<"jabatan", 'DateTime'>
    readonly jabatan_updated: FieldRef<"jabatan", 'DateTime'>
    readonly jabatan_deleted: FieldRef<"jabatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jabatan findUnique
   */
  export type jabatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter, which jabatan to fetch.
     */
    where: jabatanWhereUniqueInput
  }

  /**
   * jabatan findUniqueOrThrow
   */
  export type jabatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter, which jabatan to fetch.
     */
    where: jabatanWhereUniqueInput
  }

  /**
   * jabatan findFirst
   */
  export type jabatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter, which jabatan to fetch.
     */
    where?: jabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jabatans to fetch.
     */
    orderBy?: jabatanOrderByWithRelationInput | jabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jabatans.
     */
    cursor?: jabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * jabatan findFirstOrThrow
   */
  export type jabatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter, which jabatan to fetch.
     */
    where?: jabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jabatans to fetch.
     */
    orderBy?: jabatanOrderByWithRelationInput | jabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jabatans.
     */
    cursor?: jabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jabatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jabatans.
     */
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * jabatan findMany
   */
  export type jabatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter, which jabatans to fetch.
     */
    where?: jabatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jabatans to fetch.
     */
    orderBy?: jabatanOrderByWithRelationInput | jabatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jabatans.
     */
    cursor?: jabatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jabatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jabatans.
     */
    skip?: number
    distinct?: JabatanScalarFieldEnum | JabatanScalarFieldEnum[]
  }

  /**
   * jabatan create
   */
  export type jabatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * The data needed to create a jabatan.
     */
    data: XOR<jabatanCreateInput, jabatanUncheckedCreateInput>
  }

  /**
   * jabatan createMany
   */
  export type jabatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jabatans.
     */
    data: jabatanCreateManyInput | jabatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jabatan update
   */
  export type jabatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * The data needed to update a jabatan.
     */
    data: XOR<jabatanUpdateInput, jabatanUncheckedUpdateInput>
    /**
     * Choose, which jabatan to update.
     */
    where: jabatanWhereUniqueInput
  }

  /**
   * jabatan updateMany
   */
  export type jabatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jabatans.
     */
    data: XOR<jabatanUpdateManyMutationInput, jabatanUncheckedUpdateManyInput>
    /**
     * Filter which jabatans to update
     */
    where?: jabatanWhereInput
  }

  /**
   * jabatan upsert
   */
  export type jabatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * The filter to search for the jabatan to update in case it exists.
     */
    where: jabatanWhereUniqueInput
    /**
     * In case the jabatan found by the `where` argument doesn't exist, create a new jabatan with this data.
     */
    create: XOR<jabatanCreateInput, jabatanUncheckedCreateInput>
    /**
     * In case the jabatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jabatanUpdateInput, jabatanUncheckedUpdateInput>
  }

  /**
   * jabatan delete
   */
  export type jabatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
    /**
     * Filter which jabatan to delete.
     */
    where: jabatanWhereUniqueInput
  }

  /**
   * jabatan deleteMany
   */
  export type jabatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jabatans to delete
     */
    where?: jabatanWhereInput
  }

  /**
   * jabatan.users
   */
  export type jabatan$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * jabatan without action
   */
  export type jabatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jabatan
     */
    select?: jabatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jabatanInclude<ExtArgs> | null
  }


  /**
   * Model sktm
   */

  export type AggregateSktm = {
    _count: SktmCountAggregateOutputType | null
    _avg: SktmAvgAggregateOutputType | null
    _sum: SktmSumAggregateOutputType | null
    _min: SktmMinAggregateOutputType | null
    _max: SktmMaxAggregateOutputType | null
  }

  export type SktmAvgAggregateOutputType = {
    sktm_id: number | null
    sktm_agama: number | null
    sktm_jk: number | null
    sktm_ttd: number | null
    sktm_createdBy: number | null
  }

  export type SktmSumAggregateOutputType = {
    sktm_id: number | null
    sktm_agama: number | null
    sktm_jk: number | null
    sktm_ttd: number | null
    sktm_createdBy: number | null
  }

  export type SktmMinAggregateOutputType = {
    sktm_id: number | null
    sktm_noSurat: string | null
    sktm_nama: string | null
    sktm_tgl_lahir: Date | null
    sktm_tempat_lahir: string | null
    sktm_suku: string | null
    sktm_agama: number | null
    sktm_jk: number | null
    sktm_noKtp: string | null
    sktm_pekerjaan: string | null
    sktm_alamat: string | null
    sktm_dusun: string | null
    sktm_kepentingan: string | null
    sktm_ttd: number | null
    sktm_createdBy: number | null
    sktm_created: Date | null
    sktm_updated: Date | null
    sktm_deleted: Date | null
  }

  export type SktmMaxAggregateOutputType = {
    sktm_id: number | null
    sktm_noSurat: string | null
    sktm_nama: string | null
    sktm_tgl_lahir: Date | null
    sktm_tempat_lahir: string | null
    sktm_suku: string | null
    sktm_agama: number | null
    sktm_jk: number | null
    sktm_noKtp: string | null
    sktm_pekerjaan: string | null
    sktm_alamat: string | null
    sktm_dusun: string | null
    sktm_kepentingan: string | null
    sktm_ttd: number | null
    sktm_createdBy: number | null
    sktm_created: Date | null
    sktm_updated: Date | null
    sktm_deleted: Date | null
  }

  export type SktmCountAggregateOutputType = {
    sktm_id: number
    sktm_noSurat: number
    sktm_nama: number
    sktm_tgl_lahir: number
    sktm_tempat_lahir: number
    sktm_suku: number
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: number
    sktm_pekerjaan: number
    sktm_alamat: number
    sktm_dusun: number
    sktm_kepentingan: number
    sktm_ttd: number
    sktm_createdBy: number
    sktm_created: number
    sktm_updated: number
    sktm_deleted: number
    _all: number
  }


  export type SktmAvgAggregateInputType = {
    sktm_id?: true
    sktm_agama?: true
    sktm_jk?: true
    sktm_ttd?: true
    sktm_createdBy?: true
  }

  export type SktmSumAggregateInputType = {
    sktm_id?: true
    sktm_agama?: true
    sktm_jk?: true
    sktm_ttd?: true
    sktm_createdBy?: true
  }

  export type SktmMinAggregateInputType = {
    sktm_id?: true
    sktm_noSurat?: true
    sktm_nama?: true
    sktm_tgl_lahir?: true
    sktm_tempat_lahir?: true
    sktm_suku?: true
    sktm_agama?: true
    sktm_jk?: true
    sktm_noKtp?: true
    sktm_pekerjaan?: true
    sktm_alamat?: true
    sktm_dusun?: true
    sktm_kepentingan?: true
    sktm_ttd?: true
    sktm_createdBy?: true
    sktm_created?: true
    sktm_updated?: true
    sktm_deleted?: true
  }

  export type SktmMaxAggregateInputType = {
    sktm_id?: true
    sktm_noSurat?: true
    sktm_nama?: true
    sktm_tgl_lahir?: true
    sktm_tempat_lahir?: true
    sktm_suku?: true
    sktm_agama?: true
    sktm_jk?: true
    sktm_noKtp?: true
    sktm_pekerjaan?: true
    sktm_alamat?: true
    sktm_dusun?: true
    sktm_kepentingan?: true
    sktm_ttd?: true
    sktm_createdBy?: true
    sktm_created?: true
    sktm_updated?: true
    sktm_deleted?: true
  }

  export type SktmCountAggregateInputType = {
    sktm_id?: true
    sktm_noSurat?: true
    sktm_nama?: true
    sktm_tgl_lahir?: true
    sktm_tempat_lahir?: true
    sktm_suku?: true
    sktm_agama?: true
    sktm_jk?: true
    sktm_noKtp?: true
    sktm_pekerjaan?: true
    sktm_alamat?: true
    sktm_dusun?: true
    sktm_kepentingan?: true
    sktm_ttd?: true
    sktm_createdBy?: true
    sktm_created?: true
    sktm_updated?: true
    sktm_deleted?: true
    _all?: true
  }

  export type SktmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sktm to aggregate.
     */
    where?: sktmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sktms to fetch.
     */
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sktmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sktms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sktms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sktms
    **/
    _count?: true | SktmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SktmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SktmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SktmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SktmMaxAggregateInputType
  }

  export type GetSktmAggregateType<T extends SktmAggregateArgs> = {
        [P in keyof T & keyof AggregateSktm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSktm[P]>
      : GetScalarType<T[P], AggregateSktm[P]>
  }




  export type sktmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sktmWhereInput
    orderBy?: sktmOrderByWithAggregationInput | sktmOrderByWithAggregationInput[]
    by: SktmScalarFieldEnum[] | SktmScalarFieldEnum
    having?: sktmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SktmCountAggregateInputType | true
    _avg?: SktmAvgAggregateInputType
    _sum?: SktmSumAggregateInputType
    _min?: SktmMinAggregateInputType
    _max?: SktmMaxAggregateInputType
  }

  export type SktmGroupByOutputType = {
    sktm_id: number
    sktm_noSurat: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_ttd: number | null
    sktm_createdBy: number | null
    sktm_created: Date
    sktm_updated: Date
    sktm_deleted: Date | null
    _count: SktmCountAggregateOutputType | null
    _avg: SktmAvgAggregateOutputType | null
    _sum: SktmSumAggregateOutputType | null
    _min: SktmMinAggregateOutputType | null
    _max: SktmMaxAggregateOutputType | null
  }

  type GetSktmGroupByPayload<T extends sktmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SktmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SktmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SktmGroupByOutputType[P]>
            : GetScalarType<T[P], SktmGroupByOutputType[P]>
        }
      >
    >


  export type sktmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sktm_id?: boolean
    sktm_noSurat?: boolean
    sktm_nama?: boolean
    sktm_tgl_lahir?: boolean
    sktm_tempat_lahir?: boolean
    sktm_suku?: boolean
    sktm_agama?: boolean
    sktm_jk?: boolean
    sktm_noKtp?: boolean
    sktm_pekerjaan?: boolean
    sktm_alamat?: boolean
    sktm_dusun?: boolean
    sktm_kepentingan?: boolean
    sktm_ttd?: boolean
    sktm_createdBy?: boolean
    sktm_created?: boolean
    sktm_updated?: boolean
    sktm_deleted?: boolean
    ttd_sktm?: boolean | sktm$ttd_sktmArgs<ExtArgs>
    created_by?: boolean | sktm$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["sktm"]>


  export type sktmSelectScalar = {
    sktm_id?: boolean
    sktm_noSurat?: boolean
    sktm_nama?: boolean
    sktm_tgl_lahir?: boolean
    sktm_tempat_lahir?: boolean
    sktm_suku?: boolean
    sktm_agama?: boolean
    sktm_jk?: boolean
    sktm_noKtp?: boolean
    sktm_pekerjaan?: boolean
    sktm_alamat?: boolean
    sktm_dusun?: boolean
    sktm_kepentingan?: boolean
    sktm_ttd?: boolean
    sktm_createdBy?: boolean
    sktm_created?: boolean
    sktm_updated?: boolean
    sktm_deleted?: boolean
  }

  export type sktmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ttd_sktm?: boolean | sktm$ttd_sktmArgs<ExtArgs>
    created_by?: boolean | sktm$created_byArgs<ExtArgs>
  }

  export type $sktmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sktm"
    objects: {
      ttd_sktm: Prisma.$usersPayload<ExtArgs> | null
      created_by: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      sktm_id: number
      sktm_noSurat: string | null
      sktm_nama: string
      sktm_tgl_lahir: Date
      sktm_tempat_lahir: string
      sktm_suku: string
      sktm_agama: number
      sktm_jk: number
      sktm_noKtp: string
      sktm_pekerjaan: string
      sktm_alamat: string
      sktm_dusun: string
      sktm_kepentingan: string
      sktm_ttd: number | null
      sktm_createdBy: number | null
      sktm_created: Date
      sktm_updated: Date
      sktm_deleted: Date | null
    }, ExtArgs["result"]["sktm"]>
    composites: {}
  }

  type sktmGetPayload<S extends boolean | null | undefined | sktmDefaultArgs> = $Result.GetResult<Prisma.$sktmPayload, S>

  type sktmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sktmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SktmCountAggregateInputType | true
    }

  export interface sktmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sktm'], meta: { name: 'sktm' } }
    /**
     * Find zero or one Sktm that matches the filter.
     * @param {sktmFindUniqueArgs} args - Arguments to find a Sktm
     * @example
     * // Get one Sktm
     * const sktm = await prisma.sktm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sktmFindUniqueArgs>(args: SelectSubset<T, sktmFindUniqueArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sktm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sktmFindUniqueOrThrowArgs} args - Arguments to find a Sktm
     * @example
     * // Get one Sktm
     * const sktm = await prisma.sktm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sktmFindUniqueOrThrowArgs>(args: SelectSubset<T, sktmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sktm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmFindFirstArgs} args - Arguments to find a Sktm
     * @example
     * // Get one Sktm
     * const sktm = await prisma.sktm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sktmFindFirstArgs>(args?: SelectSubset<T, sktmFindFirstArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sktm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmFindFirstOrThrowArgs} args - Arguments to find a Sktm
     * @example
     * // Get one Sktm
     * const sktm = await prisma.sktm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sktmFindFirstOrThrowArgs>(args?: SelectSubset<T, sktmFindFirstOrThrowArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sktms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sktms
     * const sktms = await prisma.sktm.findMany()
     * 
     * // Get first 10 Sktms
     * const sktms = await prisma.sktm.findMany({ take: 10 })
     * 
     * // Only select the `sktm_id`
     * const sktmWithSktm_idOnly = await prisma.sktm.findMany({ select: { sktm_id: true } })
     * 
     */
    findMany<T extends sktmFindManyArgs>(args?: SelectSubset<T, sktmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sktm.
     * @param {sktmCreateArgs} args - Arguments to create a Sktm.
     * @example
     * // Create one Sktm
     * const Sktm = await prisma.sktm.create({
     *   data: {
     *     // ... data to create a Sktm
     *   }
     * })
     * 
     */
    create<T extends sktmCreateArgs>(args: SelectSubset<T, sktmCreateArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sktms.
     * @param {sktmCreateManyArgs} args - Arguments to create many Sktms.
     * @example
     * // Create many Sktms
     * const sktm = await prisma.sktm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sktmCreateManyArgs>(args?: SelectSubset<T, sktmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sktm.
     * @param {sktmDeleteArgs} args - Arguments to delete one Sktm.
     * @example
     * // Delete one Sktm
     * const Sktm = await prisma.sktm.delete({
     *   where: {
     *     // ... filter to delete one Sktm
     *   }
     * })
     * 
     */
    delete<T extends sktmDeleteArgs>(args: SelectSubset<T, sktmDeleteArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sktm.
     * @param {sktmUpdateArgs} args - Arguments to update one Sktm.
     * @example
     * // Update one Sktm
     * const sktm = await prisma.sktm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sktmUpdateArgs>(args: SelectSubset<T, sktmUpdateArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sktms.
     * @param {sktmDeleteManyArgs} args - Arguments to filter Sktms to delete.
     * @example
     * // Delete a few Sktms
     * const { count } = await prisma.sktm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sktmDeleteManyArgs>(args?: SelectSubset<T, sktmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sktms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sktms
     * const sktm = await prisma.sktm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sktmUpdateManyArgs>(args: SelectSubset<T, sktmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sktm.
     * @param {sktmUpsertArgs} args - Arguments to update or create a Sktm.
     * @example
     * // Update or create a Sktm
     * const sktm = await prisma.sktm.upsert({
     *   create: {
     *     // ... data to create a Sktm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sktm we want to update
     *   }
     * })
     */
    upsert<T extends sktmUpsertArgs>(args: SelectSubset<T, sktmUpsertArgs<ExtArgs>>): Prisma__sktmClient<$Result.GetResult<Prisma.$sktmPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sktms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmCountArgs} args - Arguments to filter Sktms to count.
     * @example
     * // Count the number of Sktms
     * const count = await prisma.sktm.count({
     *   where: {
     *     // ... the filter for the Sktms we want to count
     *   }
     * })
    **/
    count<T extends sktmCountArgs>(
      args?: Subset<T, sktmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SktmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sktm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SktmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SktmAggregateArgs>(args: Subset<T, SktmAggregateArgs>): Prisma.PrismaPromise<GetSktmAggregateType<T>>

    /**
     * Group by Sktm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sktmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sktmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sktmGroupByArgs['orderBy'] }
        : { orderBy?: sktmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sktmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSktmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sktm model
   */
  readonly fields: sktmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sktm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sktmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ttd_sktm<T extends sktm$ttd_sktmArgs<ExtArgs> = {}>(args?: Subset<T, sktm$ttd_sktmArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    created_by<T extends sktm$created_byArgs<ExtArgs> = {}>(args?: Subset<T, sktm$created_byArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sktm model
   */ 
  interface sktmFieldRefs {
    readonly sktm_id: FieldRef<"sktm", 'Int'>
    readonly sktm_noSurat: FieldRef<"sktm", 'String'>
    readonly sktm_nama: FieldRef<"sktm", 'String'>
    readonly sktm_tgl_lahir: FieldRef<"sktm", 'DateTime'>
    readonly sktm_tempat_lahir: FieldRef<"sktm", 'String'>
    readonly sktm_suku: FieldRef<"sktm", 'String'>
    readonly sktm_agama: FieldRef<"sktm", 'Int'>
    readonly sktm_jk: FieldRef<"sktm", 'Int'>
    readonly sktm_noKtp: FieldRef<"sktm", 'String'>
    readonly sktm_pekerjaan: FieldRef<"sktm", 'String'>
    readonly sktm_alamat: FieldRef<"sktm", 'String'>
    readonly sktm_dusun: FieldRef<"sktm", 'String'>
    readonly sktm_kepentingan: FieldRef<"sktm", 'String'>
    readonly sktm_ttd: FieldRef<"sktm", 'Int'>
    readonly sktm_createdBy: FieldRef<"sktm", 'Int'>
    readonly sktm_created: FieldRef<"sktm", 'DateTime'>
    readonly sktm_updated: FieldRef<"sktm", 'DateTime'>
    readonly sktm_deleted: FieldRef<"sktm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sktm findUnique
   */
  export type sktmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter, which sktm to fetch.
     */
    where: sktmWhereUniqueInput
  }

  /**
   * sktm findUniqueOrThrow
   */
  export type sktmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter, which sktm to fetch.
     */
    where: sktmWhereUniqueInput
  }

  /**
   * sktm findFirst
   */
  export type sktmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter, which sktm to fetch.
     */
    where?: sktmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sktms to fetch.
     */
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sktms.
     */
    cursor?: sktmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sktms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sktms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sktms.
     */
    distinct?: SktmScalarFieldEnum | SktmScalarFieldEnum[]
  }

  /**
   * sktm findFirstOrThrow
   */
  export type sktmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter, which sktm to fetch.
     */
    where?: sktmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sktms to fetch.
     */
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sktms.
     */
    cursor?: sktmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sktms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sktms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sktms.
     */
    distinct?: SktmScalarFieldEnum | SktmScalarFieldEnum[]
  }

  /**
   * sktm findMany
   */
  export type sktmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter, which sktms to fetch.
     */
    where?: sktmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sktms to fetch.
     */
    orderBy?: sktmOrderByWithRelationInput | sktmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sktms.
     */
    cursor?: sktmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sktms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sktms.
     */
    skip?: number
    distinct?: SktmScalarFieldEnum | SktmScalarFieldEnum[]
  }

  /**
   * sktm create
   */
  export type sktmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * The data needed to create a sktm.
     */
    data: XOR<sktmCreateInput, sktmUncheckedCreateInput>
  }

  /**
   * sktm createMany
   */
  export type sktmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sktms.
     */
    data: sktmCreateManyInput | sktmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sktm update
   */
  export type sktmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * The data needed to update a sktm.
     */
    data: XOR<sktmUpdateInput, sktmUncheckedUpdateInput>
    /**
     * Choose, which sktm to update.
     */
    where: sktmWhereUniqueInput
  }

  /**
   * sktm updateMany
   */
  export type sktmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sktms.
     */
    data: XOR<sktmUpdateManyMutationInput, sktmUncheckedUpdateManyInput>
    /**
     * Filter which sktms to update
     */
    where?: sktmWhereInput
  }

  /**
   * sktm upsert
   */
  export type sktmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * The filter to search for the sktm to update in case it exists.
     */
    where: sktmWhereUniqueInput
    /**
     * In case the sktm found by the `where` argument doesn't exist, create a new sktm with this data.
     */
    create: XOR<sktmCreateInput, sktmUncheckedCreateInput>
    /**
     * In case the sktm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sktmUpdateInput, sktmUncheckedUpdateInput>
  }

  /**
   * sktm delete
   */
  export type sktmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
    /**
     * Filter which sktm to delete.
     */
    where: sktmWhereUniqueInput
  }

  /**
   * sktm deleteMany
   */
  export type sktmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sktms to delete
     */
    where?: sktmWhereInput
  }

  /**
   * sktm.ttd_sktm
   */
  export type sktm$ttd_sktmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * sktm.created_by
   */
  export type sktm$created_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * sktm without action
   */
  export type sktmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sktm
     */
    select?: sktmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sktmInclude<ExtArgs> | null
  }


  /**
   * Model belumNikah
   */

  export type AggregateBelumNikah = {
    _count: BelumNikahCountAggregateOutputType | null
    _avg: BelumNikahAvgAggregateOutputType | null
    _sum: BelumNikahSumAggregateOutputType | null
    _min: BelumNikahMinAggregateOutputType | null
    _max: BelumNikahMaxAggregateOutputType | null
  }

  export type BelumNikahAvgAggregateOutputType = {
    nikah_id: number | null
    nikah_jk: number | null
    nikah_agama: number | null
    nikah_ttd: number | null
    nikah_createdBy: number | null
  }

  export type BelumNikahSumAggregateOutputType = {
    nikah_id: number | null
    nikah_jk: number | null
    nikah_agama: number | null
    nikah_ttd: number | null
    nikah_createdBy: number | null
  }

  export type BelumNikahMinAggregateOutputType = {
    nikah_id: number | null
    nikah_nomor: string | null
    nikah_nama: string | null
    nikah_jk: number | null
    nikah_tempat_lahir: string | null
    nikah_tgl_lahir: Date | null
    nikah_suku: string | null
    nikah_agama: number | null
    nikah_nik: string | null
    nikah_alamat: string | null
    nikah_kepentingan: string | null
    nikah_ttd: number | null
    nikah_createdBy: number | null
    nikah_created: Date | null
    nikah_updated: Date | null
    nikah_deleted: Date | null
  }

  export type BelumNikahMaxAggregateOutputType = {
    nikah_id: number | null
    nikah_nomor: string | null
    nikah_nama: string | null
    nikah_jk: number | null
    nikah_tempat_lahir: string | null
    nikah_tgl_lahir: Date | null
    nikah_suku: string | null
    nikah_agama: number | null
    nikah_nik: string | null
    nikah_alamat: string | null
    nikah_kepentingan: string | null
    nikah_ttd: number | null
    nikah_createdBy: number | null
    nikah_created: Date | null
    nikah_updated: Date | null
    nikah_deleted: Date | null
  }

  export type BelumNikahCountAggregateOutputType = {
    nikah_id: number
    nikah_nomor: number
    nikah_nama: number
    nikah_jk: number
    nikah_tempat_lahir: number
    nikah_tgl_lahir: number
    nikah_suku: number
    nikah_agama: number
    nikah_nik: number
    nikah_alamat: number
    nikah_kepentingan: number
    nikah_ttd: number
    nikah_createdBy: number
    nikah_created: number
    nikah_updated: number
    nikah_deleted: number
    _all: number
  }


  export type BelumNikahAvgAggregateInputType = {
    nikah_id?: true
    nikah_jk?: true
    nikah_agama?: true
    nikah_ttd?: true
    nikah_createdBy?: true
  }

  export type BelumNikahSumAggregateInputType = {
    nikah_id?: true
    nikah_jk?: true
    nikah_agama?: true
    nikah_ttd?: true
    nikah_createdBy?: true
  }

  export type BelumNikahMinAggregateInputType = {
    nikah_id?: true
    nikah_nomor?: true
    nikah_nama?: true
    nikah_jk?: true
    nikah_tempat_lahir?: true
    nikah_tgl_lahir?: true
    nikah_suku?: true
    nikah_agama?: true
    nikah_nik?: true
    nikah_alamat?: true
    nikah_kepentingan?: true
    nikah_ttd?: true
    nikah_createdBy?: true
    nikah_created?: true
    nikah_updated?: true
    nikah_deleted?: true
  }

  export type BelumNikahMaxAggregateInputType = {
    nikah_id?: true
    nikah_nomor?: true
    nikah_nama?: true
    nikah_jk?: true
    nikah_tempat_lahir?: true
    nikah_tgl_lahir?: true
    nikah_suku?: true
    nikah_agama?: true
    nikah_nik?: true
    nikah_alamat?: true
    nikah_kepentingan?: true
    nikah_ttd?: true
    nikah_createdBy?: true
    nikah_created?: true
    nikah_updated?: true
    nikah_deleted?: true
  }

  export type BelumNikahCountAggregateInputType = {
    nikah_id?: true
    nikah_nomor?: true
    nikah_nama?: true
    nikah_jk?: true
    nikah_tempat_lahir?: true
    nikah_tgl_lahir?: true
    nikah_suku?: true
    nikah_agama?: true
    nikah_nik?: true
    nikah_alamat?: true
    nikah_kepentingan?: true
    nikah_ttd?: true
    nikah_createdBy?: true
    nikah_created?: true
    nikah_updated?: true
    nikah_deleted?: true
    _all?: true
  }

  export type BelumNikahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which belumNikah to aggregate.
     */
    where?: belumNikahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belumNikahs to fetch.
     */
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: belumNikahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belumNikahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belumNikahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned belumNikahs
    **/
    _count?: true | BelumNikahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BelumNikahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BelumNikahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BelumNikahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BelumNikahMaxAggregateInputType
  }

  export type GetBelumNikahAggregateType<T extends BelumNikahAggregateArgs> = {
        [P in keyof T & keyof AggregateBelumNikah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBelumNikah[P]>
      : GetScalarType<T[P], AggregateBelumNikah[P]>
  }




  export type belumNikahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: belumNikahWhereInput
    orderBy?: belumNikahOrderByWithAggregationInput | belumNikahOrderByWithAggregationInput[]
    by: BelumNikahScalarFieldEnum[] | BelumNikahScalarFieldEnum
    having?: belumNikahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BelumNikahCountAggregateInputType | true
    _avg?: BelumNikahAvgAggregateInputType
    _sum?: BelumNikahSumAggregateInputType
    _min?: BelumNikahMinAggregateInputType
    _max?: BelumNikahMaxAggregateInputType
  }

  export type BelumNikahGroupByOutputType = {
    nikah_id: number
    nikah_nomor: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_ttd: number | null
    nikah_createdBy: number | null
    nikah_created: Date
    nikah_updated: Date
    nikah_deleted: Date | null
    _count: BelumNikahCountAggregateOutputType | null
    _avg: BelumNikahAvgAggregateOutputType | null
    _sum: BelumNikahSumAggregateOutputType | null
    _min: BelumNikahMinAggregateOutputType | null
    _max: BelumNikahMaxAggregateOutputType | null
  }

  type GetBelumNikahGroupByPayload<T extends belumNikahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BelumNikahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BelumNikahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BelumNikahGroupByOutputType[P]>
            : GetScalarType<T[P], BelumNikahGroupByOutputType[P]>
        }
      >
    >


  export type belumNikahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nikah_id?: boolean
    nikah_nomor?: boolean
    nikah_nama?: boolean
    nikah_jk?: boolean
    nikah_tempat_lahir?: boolean
    nikah_tgl_lahir?: boolean
    nikah_suku?: boolean
    nikah_agama?: boolean
    nikah_nik?: boolean
    nikah_alamat?: boolean
    nikah_kepentingan?: boolean
    nikah_ttd?: boolean
    nikah_createdBy?: boolean
    nikah_created?: boolean
    nikah_updated?: boolean
    nikah_deleted?: boolean
    ttd_nikah?: boolean | belumNikah$ttd_nikahArgs<ExtArgs>
    created_by?: boolean | belumNikah$created_byArgs<ExtArgs>
  }, ExtArgs["result"]["belumNikah"]>


  export type belumNikahSelectScalar = {
    nikah_id?: boolean
    nikah_nomor?: boolean
    nikah_nama?: boolean
    nikah_jk?: boolean
    nikah_tempat_lahir?: boolean
    nikah_tgl_lahir?: boolean
    nikah_suku?: boolean
    nikah_agama?: boolean
    nikah_nik?: boolean
    nikah_alamat?: boolean
    nikah_kepentingan?: boolean
    nikah_ttd?: boolean
    nikah_createdBy?: boolean
    nikah_created?: boolean
    nikah_updated?: boolean
    nikah_deleted?: boolean
  }

  export type belumNikahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ttd_nikah?: boolean | belumNikah$ttd_nikahArgs<ExtArgs>
    created_by?: boolean | belumNikah$created_byArgs<ExtArgs>
  }

  export type $belumNikahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "belumNikah"
    objects: {
      ttd_nikah: Prisma.$usersPayload<ExtArgs> | null
      created_by: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      nikah_id: number
      nikah_nomor: string | null
      nikah_nama: string
      nikah_jk: number
      nikah_tempat_lahir: string
      nikah_tgl_lahir: Date
      nikah_suku: string
      nikah_agama: number
      nikah_nik: string
      nikah_alamat: string
      nikah_kepentingan: string
      nikah_ttd: number | null
      nikah_createdBy: number | null
      nikah_created: Date
      nikah_updated: Date
      nikah_deleted: Date | null
    }, ExtArgs["result"]["belumNikah"]>
    composites: {}
  }

  type belumNikahGetPayload<S extends boolean | null | undefined | belumNikahDefaultArgs> = $Result.GetResult<Prisma.$belumNikahPayload, S>

  type belumNikahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<belumNikahFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BelumNikahCountAggregateInputType | true
    }

  export interface belumNikahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['belumNikah'], meta: { name: 'belumNikah' } }
    /**
     * Find zero or one BelumNikah that matches the filter.
     * @param {belumNikahFindUniqueArgs} args - Arguments to find a BelumNikah
     * @example
     * // Get one BelumNikah
     * const belumNikah = await prisma.belumNikah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends belumNikahFindUniqueArgs>(args: SelectSubset<T, belumNikahFindUniqueArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BelumNikah that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {belumNikahFindUniqueOrThrowArgs} args - Arguments to find a BelumNikah
     * @example
     * // Get one BelumNikah
     * const belumNikah = await prisma.belumNikah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends belumNikahFindUniqueOrThrowArgs>(args: SelectSubset<T, belumNikahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BelumNikah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahFindFirstArgs} args - Arguments to find a BelumNikah
     * @example
     * // Get one BelumNikah
     * const belumNikah = await prisma.belumNikah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends belumNikahFindFirstArgs>(args?: SelectSubset<T, belumNikahFindFirstArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BelumNikah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahFindFirstOrThrowArgs} args - Arguments to find a BelumNikah
     * @example
     * // Get one BelumNikah
     * const belumNikah = await prisma.belumNikah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends belumNikahFindFirstOrThrowArgs>(args?: SelectSubset<T, belumNikahFindFirstOrThrowArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BelumNikahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BelumNikahs
     * const belumNikahs = await prisma.belumNikah.findMany()
     * 
     * // Get first 10 BelumNikahs
     * const belumNikahs = await prisma.belumNikah.findMany({ take: 10 })
     * 
     * // Only select the `nikah_id`
     * const belumNikahWithNikah_idOnly = await prisma.belumNikah.findMany({ select: { nikah_id: true } })
     * 
     */
    findMany<T extends belumNikahFindManyArgs>(args?: SelectSubset<T, belumNikahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BelumNikah.
     * @param {belumNikahCreateArgs} args - Arguments to create a BelumNikah.
     * @example
     * // Create one BelumNikah
     * const BelumNikah = await prisma.belumNikah.create({
     *   data: {
     *     // ... data to create a BelumNikah
     *   }
     * })
     * 
     */
    create<T extends belumNikahCreateArgs>(args: SelectSubset<T, belumNikahCreateArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BelumNikahs.
     * @param {belumNikahCreateManyArgs} args - Arguments to create many BelumNikahs.
     * @example
     * // Create many BelumNikahs
     * const belumNikah = await prisma.belumNikah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends belumNikahCreateManyArgs>(args?: SelectSubset<T, belumNikahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BelumNikah.
     * @param {belumNikahDeleteArgs} args - Arguments to delete one BelumNikah.
     * @example
     * // Delete one BelumNikah
     * const BelumNikah = await prisma.belumNikah.delete({
     *   where: {
     *     // ... filter to delete one BelumNikah
     *   }
     * })
     * 
     */
    delete<T extends belumNikahDeleteArgs>(args: SelectSubset<T, belumNikahDeleteArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BelumNikah.
     * @param {belumNikahUpdateArgs} args - Arguments to update one BelumNikah.
     * @example
     * // Update one BelumNikah
     * const belumNikah = await prisma.belumNikah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends belumNikahUpdateArgs>(args: SelectSubset<T, belumNikahUpdateArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BelumNikahs.
     * @param {belumNikahDeleteManyArgs} args - Arguments to filter BelumNikahs to delete.
     * @example
     * // Delete a few BelumNikahs
     * const { count } = await prisma.belumNikah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends belumNikahDeleteManyArgs>(args?: SelectSubset<T, belumNikahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BelumNikahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BelumNikahs
     * const belumNikah = await prisma.belumNikah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends belumNikahUpdateManyArgs>(args: SelectSubset<T, belumNikahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BelumNikah.
     * @param {belumNikahUpsertArgs} args - Arguments to update or create a BelumNikah.
     * @example
     * // Update or create a BelumNikah
     * const belumNikah = await prisma.belumNikah.upsert({
     *   create: {
     *     // ... data to create a BelumNikah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BelumNikah we want to update
     *   }
     * })
     */
    upsert<T extends belumNikahUpsertArgs>(args: SelectSubset<T, belumNikahUpsertArgs<ExtArgs>>): Prisma__belumNikahClient<$Result.GetResult<Prisma.$belumNikahPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BelumNikahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahCountArgs} args - Arguments to filter BelumNikahs to count.
     * @example
     * // Count the number of BelumNikahs
     * const count = await prisma.belumNikah.count({
     *   where: {
     *     // ... the filter for the BelumNikahs we want to count
     *   }
     * })
    **/
    count<T extends belumNikahCountArgs>(
      args?: Subset<T, belumNikahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BelumNikahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BelumNikah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BelumNikahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BelumNikahAggregateArgs>(args: Subset<T, BelumNikahAggregateArgs>): Prisma.PrismaPromise<GetBelumNikahAggregateType<T>>

    /**
     * Group by BelumNikah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {belumNikahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends belumNikahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: belumNikahGroupByArgs['orderBy'] }
        : { orderBy?: belumNikahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, belumNikahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBelumNikahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the belumNikah model
   */
  readonly fields: belumNikahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for belumNikah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__belumNikahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ttd_nikah<T extends belumNikah$ttd_nikahArgs<ExtArgs> = {}>(args?: Subset<T, belumNikah$ttd_nikahArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    created_by<T extends belumNikah$created_byArgs<ExtArgs> = {}>(args?: Subset<T, belumNikah$created_byArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the belumNikah model
   */ 
  interface belumNikahFieldRefs {
    readonly nikah_id: FieldRef<"belumNikah", 'Int'>
    readonly nikah_nomor: FieldRef<"belumNikah", 'String'>
    readonly nikah_nama: FieldRef<"belumNikah", 'String'>
    readonly nikah_jk: FieldRef<"belumNikah", 'Int'>
    readonly nikah_tempat_lahir: FieldRef<"belumNikah", 'String'>
    readonly nikah_tgl_lahir: FieldRef<"belumNikah", 'DateTime'>
    readonly nikah_suku: FieldRef<"belumNikah", 'String'>
    readonly nikah_agama: FieldRef<"belumNikah", 'Int'>
    readonly nikah_nik: FieldRef<"belumNikah", 'String'>
    readonly nikah_alamat: FieldRef<"belumNikah", 'String'>
    readonly nikah_kepentingan: FieldRef<"belumNikah", 'String'>
    readonly nikah_ttd: FieldRef<"belumNikah", 'Int'>
    readonly nikah_createdBy: FieldRef<"belumNikah", 'Int'>
    readonly nikah_created: FieldRef<"belumNikah", 'DateTime'>
    readonly nikah_updated: FieldRef<"belumNikah", 'DateTime'>
    readonly nikah_deleted: FieldRef<"belumNikah", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * belumNikah findUnique
   */
  export type belumNikahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter, which belumNikah to fetch.
     */
    where: belumNikahWhereUniqueInput
  }

  /**
   * belumNikah findUniqueOrThrow
   */
  export type belumNikahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter, which belumNikah to fetch.
     */
    where: belumNikahWhereUniqueInput
  }

  /**
   * belumNikah findFirst
   */
  export type belumNikahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter, which belumNikah to fetch.
     */
    where?: belumNikahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belumNikahs to fetch.
     */
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for belumNikahs.
     */
    cursor?: belumNikahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belumNikahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belumNikahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of belumNikahs.
     */
    distinct?: BelumNikahScalarFieldEnum | BelumNikahScalarFieldEnum[]
  }

  /**
   * belumNikah findFirstOrThrow
   */
  export type belumNikahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter, which belumNikah to fetch.
     */
    where?: belumNikahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belumNikahs to fetch.
     */
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for belumNikahs.
     */
    cursor?: belumNikahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belumNikahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belumNikahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of belumNikahs.
     */
    distinct?: BelumNikahScalarFieldEnum | BelumNikahScalarFieldEnum[]
  }

  /**
   * belumNikah findMany
   */
  export type belumNikahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter, which belumNikahs to fetch.
     */
    where?: belumNikahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of belumNikahs to fetch.
     */
    orderBy?: belumNikahOrderByWithRelationInput | belumNikahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing belumNikahs.
     */
    cursor?: belumNikahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` belumNikahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` belumNikahs.
     */
    skip?: number
    distinct?: BelumNikahScalarFieldEnum | BelumNikahScalarFieldEnum[]
  }

  /**
   * belumNikah create
   */
  export type belumNikahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * The data needed to create a belumNikah.
     */
    data: XOR<belumNikahCreateInput, belumNikahUncheckedCreateInput>
  }

  /**
   * belumNikah createMany
   */
  export type belumNikahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many belumNikahs.
     */
    data: belumNikahCreateManyInput | belumNikahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * belumNikah update
   */
  export type belumNikahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * The data needed to update a belumNikah.
     */
    data: XOR<belumNikahUpdateInput, belumNikahUncheckedUpdateInput>
    /**
     * Choose, which belumNikah to update.
     */
    where: belumNikahWhereUniqueInput
  }

  /**
   * belumNikah updateMany
   */
  export type belumNikahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update belumNikahs.
     */
    data: XOR<belumNikahUpdateManyMutationInput, belumNikahUncheckedUpdateManyInput>
    /**
     * Filter which belumNikahs to update
     */
    where?: belumNikahWhereInput
  }

  /**
   * belumNikah upsert
   */
  export type belumNikahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * The filter to search for the belumNikah to update in case it exists.
     */
    where: belumNikahWhereUniqueInput
    /**
     * In case the belumNikah found by the `where` argument doesn't exist, create a new belumNikah with this data.
     */
    create: XOR<belumNikahCreateInput, belumNikahUncheckedCreateInput>
    /**
     * In case the belumNikah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<belumNikahUpdateInput, belumNikahUncheckedUpdateInput>
  }

  /**
   * belumNikah delete
   */
  export type belumNikahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
    /**
     * Filter which belumNikah to delete.
     */
    where: belumNikahWhereUniqueInput
  }

  /**
   * belumNikah deleteMany
   */
  export type belumNikahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which belumNikahs to delete
     */
    where?: belumNikahWhereInput
  }

  /**
   * belumNikah.ttd_nikah
   */
  export type belumNikah$ttd_nikahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * belumNikah.created_by
   */
  export type belumNikah$created_byArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * belumNikah without action
   */
  export type belumNikahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the belumNikah
     */
    select?: belumNikahSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: belumNikahInclude<ExtArgs> | null
  }


  /**
   * Model skck
   */

  export type AggregateSkck = {
    _count: SkckCountAggregateOutputType | null
    _avg: SkckAvgAggregateOutputType | null
    _sum: SkckSumAggregateOutputType | null
    _min: SkckMinAggregateOutputType | null
    _max: SkckMaxAggregateOutputType | null
  }

  export type SkckAvgAggregateOutputType = {
    skck_id: number | null
    skck_jk: number | null
    skck_agama: number | null
    skck_statusKawin: number | null
    skck_pendidikan_terakhir: number | null
    skck_ttd: number | null
    skck_createdBy: number | null
  }

  export type SkckSumAggregateOutputType = {
    skck_id: number | null
    skck_jk: number | null
    skck_agama: number | null
    skck_statusKawin: number | null
    skck_pendidikan_terakhir: number | null
    skck_ttd: number | null
    skck_createdBy: number | null
  }

  export type SkckMinAggregateOutputType = {
    skck_id: number | null
    skck_nomor: string | null
    skck_nama: string | null
    skck_tempat_lahir: string | null
    skck_tanggal_lahir: Date | null
    skck_jk: number | null
    skck_agama: number | null
    skck_statusKawin: number | null
    skck_pekerjaan: string | null
    skck_suku: string | null
    skck_nik: string | null
    skck_alamat: string | null
    skck_pendidikan_terakhir: number | null
    skck_kepentingan: string | null
    skck_ttd: number | null
    skck_createdBy: number | null
    skck_created: Date | null
    skck_updated: Date | null
    skck_deleted: Date | null
  }

  export type SkckMaxAggregateOutputType = {
    skck_id: number | null
    skck_nomor: string | null
    skck_nama: string | null
    skck_tempat_lahir: string | null
    skck_tanggal_lahir: Date | null
    skck_jk: number | null
    skck_agama: number | null
    skck_statusKawin: number | null
    skck_pekerjaan: string | null
    skck_suku: string | null
    skck_nik: string | null
    skck_alamat: string | null
    skck_pendidikan_terakhir: number | null
    skck_kepentingan: string | null
    skck_ttd: number | null
    skck_createdBy: number | null
    skck_created: Date | null
    skck_updated: Date | null
    skck_deleted: Date | null
  }

  export type SkckCountAggregateOutputType = {
    skck_id: number
    skck_nomor: number
    skck_nama: number
    skck_tempat_lahir: number
    skck_tanggal_lahir: number
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: number
    skck_suku: number
    skck_nik: number
    skck_alamat: number
    skck_pendidikan_terakhir: number
    skck_kepentingan: number
    skck_ttd: number
    skck_createdBy: number
    skck_created: number
    skck_updated: number
    skck_deleted: number
    _all: number
  }


  export type SkckAvgAggregateInputType = {
    skck_id?: true
    skck_jk?: true
    skck_agama?: true
    skck_statusKawin?: true
    skck_pendidikan_terakhir?: true
    skck_ttd?: true
    skck_createdBy?: true
  }

  export type SkckSumAggregateInputType = {
    skck_id?: true
    skck_jk?: true
    skck_agama?: true
    skck_statusKawin?: true
    skck_pendidikan_terakhir?: true
    skck_ttd?: true
    skck_createdBy?: true
  }

  export type SkckMinAggregateInputType = {
    skck_id?: true
    skck_nomor?: true
    skck_nama?: true
    skck_tempat_lahir?: true
    skck_tanggal_lahir?: true
    skck_jk?: true
    skck_agama?: true
    skck_statusKawin?: true
    skck_pekerjaan?: true
    skck_suku?: true
    skck_nik?: true
    skck_alamat?: true
    skck_pendidikan_terakhir?: true
    skck_kepentingan?: true
    skck_ttd?: true
    skck_createdBy?: true
    skck_created?: true
    skck_updated?: true
    skck_deleted?: true
  }

  export type SkckMaxAggregateInputType = {
    skck_id?: true
    skck_nomor?: true
    skck_nama?: true
    skck_tempat_lahir?: true
    skck_tanggal_lahir?: true
    skck_jk?: true
    skck_agama?: true
    skck_statusKawin?: true
    skck_pekerjaan?: true
    skck_suku?: true
    skck_nik?: true
    skck_alamat?: true
    skck_pendidikan_terakhir?: true
    skck_kepentingan?: true
    skck_ttd?: true
    skck_createdBy?: true
    skck_created?: true
    skck_updated?: true
    skck_deleted?: true
  }

  export type SkckCountAggregateInputType = {
    skck_id?: true
    skck_nomor?: true
    skck_nama?: true
    skck_tempat_lahir?: true
    skck_tanggal_lahir?: true
    skck_jk?: true
    skck_agama?: true
    skck_statusKawin?: true
    skck_pekerjaan?: true
    skck_suku?: true
    skck_nik?: true
    skck_alamat?: true
    skck_pendidikan_terakhir?: true
    skck_kepentingan?: true
    skck_ttd?: true
    skck_createdBy?: true
    skck_created?: true
    skck_updated?: true
    skck_deleted?: true
    _all?: true
  }

  export type SkckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skck to aggregate.
     */
    where?: skckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skcks to fetch.
     */
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skcks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skcks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skcks
    **/
    _count?: true | SkckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkckMaxAggregateInputType
  }

  export type GetSkckAggregateType<T extends SkckAggregateArgs> = {
        [P in keyof T & keyof AggregateSkck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkck[P]>
      : GetScalarType<T[P], AggregateSkck[P]>
  }




  export type skckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skckWhereInput
    orderBy?: skckOrderByWithAggregationInput | skckOrderByWithAggregationInput[]
    by: SkckScalarFieldEnum[] | SkckScalarFieldEnum
    having?: skckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkckCountAggregateInputType | true
    _avg?: SkckAvgAggregateInputType
    _sum?: SkckSumAggregateInputType
    _min?: SkckMinAggregateInputType
    _max?: SkckMaxAggregateInputType
  }

  export type SkckGroupByOutputType = {
    skck_id: number
    skck_nomor: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_ttd: number | null
    skck_createdBy: number | null
    skck_created: Date
    skck_updated: Date
    skck_deleted: Date | null
    _count: SkckCountAggregateOutputType | null
    _avg: SkckAvgAggregateOutputType | null
    _sum: SkckSumAggregateOutputType | null
    _min: SkckMinAggregateOutputType | null
    _max: SkckMaxAggregateOutputType | null
  }

  type GetSkckGroupByPayload<T extends skckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkckGroupByOutputType[P]>
            : GetScalarType<T[P], SkckGroupByOutputType[P]>
        }
      >
    >


  export type skckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    skck_id?: boolean
    skck_nomor?: boolean
    skck_nama?: boolean
    skck_tempat_lahir?: boolean
    skck_tanggal_lahir?: boolean
    skck_jk?: boolean
    skck_agama?: boolean
    skck_statusKawin?: boolean
    skck_pekerjaan?: boolean
    skck_suku?: boolean
    skck_nik?: boolean
    skck_alamat?: boolean
    skck_pendidikan_terakhir?: boolean
    skck_kepentingan?: boolean
    skck_ttd?: boolean
    skck_createdBy?: boolean
    skck_created?: boolean
    skck_updated?: boolean
    skck_deleted?: boolean
    ttd_skck?: boolean | skck$ttd_skckArgs<ExtArgs>
    createdBy?: boolean | skck$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["skck"]>


  export type skckSelectScalar = {
    skck_id?: boolean
    skck_nomor?: boolean
    skck_nama?: boolean
    skck_tempat_lahir?: boolean
    skck_tanggal_lahir?: boolean
    skck_jk?: boolean
    skck_agama?: boolean
    skck_statusKawin?: boolean
    skck_pekerjaan?: boolean
    skck_suku?: boolean
    skck_nik?: boolean
    skck_alamat?: boolean
    skck_pendidikan_terakhir?: boolean
    skck_kepentingan?: boolean
    skck_ttd?: boolean
    skck_createdBy?: boolean
    skck_created?: boolean
    skck_updated?: boolean
    skck_deleted?: boolean
  }

  export type skckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ttd_skck?: boolean | skck$ttd_skckArgs<ExtArgs>
    createdBy?: boolean | skck$createdByArgs<ExtArgs>
  }

  export type $skckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skck"
    objects: {
      ttd_skck: Prisma.$usersPayload<ExtArgs> | null
      createdBy: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      skck_id: number
      skck_nomor: string | null
      skck_nama: string
      skck_tempat_lahir: string
      skck_tanggal_lahir: Date
      skck_jk: number
      skck_agama: number
      skck_statusKawin: number
      skck_pekerjaan: string
      skck_suku: string
      skck_nik: string
      skck_alamat: string
      skck_pendidikan_terakhir: number
      skck_kepentingan: string
      skck_ttd: number | null
      skck_createdBy: number | null
      skck_created: Date
      skck_updated: Date
      skck_deleted: Date | null
    }, ExtArgs["result"]["skck"]>
    composites: {}
  }

  type skckGetPayload<S extends boolean | null | undefined | skckDefaultArgs> = $Result.GetResult<Prisma.$skckPayload, S>

  type skckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<skckFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SkckCountAggregateInputType | true
    }

  export interface skckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skck'], meta: { name: 'skck' } }
    /**
     * Find zero or one Skck that matches the filter.
     * @param {skckFindUniqueArgs} args - Arguments to find a Skck
     * @example
     * // Get one Skck
     * const skck = await prisma.skck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skckFindUniqueArgs>(args: SelectSubset<T, skckFindUniqueArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Skck that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {skckFindUniqueOrThrowArgs} args - Arguments to find a Skck
     * @example
     * // Get one Skck
     * const skck = await prisma.skck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skckFindUniqueOrThrowArgs>(args: SelectSubset<T, skckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Skck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckFindFirstArgs} args - Arguments to find a Skck
     * @example
     * // Get one Skck
     * const skck = await prisma.skck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skckFindFirstArgs>(args?: SelectSubset<T, skckFindFirstArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Skck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckFindFirstOrThrowArgs} args - Arguments to find a Skck
     * @example
     * // Get one Skck
     * const skck = await prisma.skck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skckFindFirstOrThrowArgs>(args?: SelectSubset<T, skckFindFirstOrThrowArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Skcks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skcks
     * const skcks = await prisma.skck.findMany()
     * 
     * // Get first 10 Skcks
     * const skcks = await prisma.skck.findMany({ take: 10 })
     * 
     * // Only select the `skck_id`
     * const skckWithSkck_idOnly = await prisma.skck.findMany({ select: { skck_id: true } })
     * 
     */
    findMany<T extends skckFindManyArgs>(args?: SelectSubset<T, skckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Skck.
     * @param {skckCreateArgs} args - Arguments to create a Skck.
     * @example
     * // Create one Skck
     * const Skck = await prisma.skck.create({
     *   data: {
     *     // ... data to create a Skck
     *   }
     * })
     * 
     */
    create<T extends skckCreateArgs>(args: SelectSubset<T, skckCreateArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Skcks.
     * @param {skckCreateManyArgs} args - Arguments to create many Skcks.
     * @example
     * // Create many Skcks
     * const skck = await prisma.skck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skckCreateManyArgs>(args?: SelectSubset<T, skckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skck.
     * @param {skckDeleteArgs} args - Arguments to delete one Skck.
     * @example
     * // Delete one Skck
     * const Skck = await prisma.skck.delete({
     *   where: {
     *     // ... filter to delete one Skck
     *   }
     * })
     * 
     */
    delete<T extends skckDeleteArgs>(args: SelectSubset<T, skckDeleteArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Skck.
     * @param {skckUpdateArgs} args - Arguments to update one Skck.
     * @example
     * // Update one Skck
     * const skck = await prisma.skck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skckUpdateArgs>(args: SelectSubset<T, skckUpdateArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Skcks.
     * @param {skckDeleteManyArgs} args - Arguments to filter Skcks to delete.
     * @example
     * // Delete a few Skcks
     * const { count } = await prisma.skck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skckDeleteManyArgs>(args?: SelectSubset<T, skckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skcks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skcks
     * const skck = await prisma.skck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skckUpdateManyArgs>(args: SelectSubset<T, skckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skck.
     * @param {skckUpsertArgs} args - Arguments to update or create a Skck.
     * @example
     * // Update or create a Skck
     * const skck = await prisma.skck.upsert({
     *   create: {
     *     // ... data to create a Skck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skck we want to update
     *   }
     * })
     */
    upsert<T extends skckUpsertArgs>(args: SelectSubset<T, skckUpsertArgs<ExtArgs>>): Prisma__skckClient<$Result.GetResult<Prisma.$skckPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Skcks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckCountArgs} args - Arguments to filter Skcks to count.
     * @example
     * // Count the number of Skcks
     * const count = await prisma.skck.count({
     *   where: {
     *     // ... the filter for the Skcks we want to count
     *   }
     * })
    **/
    count<T extends skckCountArgs>(
      args?: Subset<T, skckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkckAggregateArgs>(args: Subset<T, SkckAggregateArgs>): Prisma.PrismaPromise<GetSkckAggregateType<T>>

    /**
     * Group by Skck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skckGroupByArgs['orderBy'] }
        : { orderBy?: skckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skck model
   */
  readonly fields: skckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ttd_skck<T extends skck$ttd_skckArgs<ExtArgs> = {}>(args?: Subset<T, skck$ttd_skckArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    createdBy<T extends skck$createdByArgs<ExtArgs> = {}>(args?: Subset<T, skck$createdByArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skck model
   */ 
  interface skckFieldRefs {
    readonly skck_id: FieldRef<"skck", 'Int'>
    readonly skck_nomor: FieldRef<"skck", 'String'>
    readonly skck_nama: FieldRef<"skck", 'String'>
    readonly skck_tempat_lahir: FieldRef<"skck", 'String'>
    readonly skck_tanggal_lahir: FieldRef<"skck", 'DateTime'>
    readonly skck_jk: FieldRef<"skck", 'Int'>
    readonly skck_agama: FieldRef<"skck", 'Int'>
    readonly skck_statusKawin: FieldRef<"skck", 'Int'>
    readonly skck_pekerjaan: FieldRef<"skck", 'String'>
    readonly skck_suku: FieldRef<"skck", 'String'>
    readonly skck_nik: FieldRef<"skck", 'String'>
    readonly skck_alamat: FieldRef<"skck", 'String'>
    readonly skck_pendidikan_terakhir: FieldRef<"skck", 'Int'>
    readonly skck_kepentingan: FieldRef<"skck", 'String'>
    readonly skck_ttd: FieldRef<"skck", 'Int'>
    readonly skck_createdBy: FieldRef<"skck", 'Int'>
    readonly skck_created: FieldRef<"skck", 'DateTime'>
    readonly skck_updated: FieldRef<"skck", 'DateTime'>
    readonly skck_deleted: FieldRef<"skck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skck findUnique
   */
  export type skckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter, which skck to fetch.
     */
    where: skckWhereUniqueInput
  }

  /**
   * skck findUniqueOrThrow
   */
  export type skckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter, which skck to fetch.
     */
    where: skckWhereUniqueInput
  }

  /**
   * skck findFirst
   */
  export type skckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter, which skck to fetch.
     */
    where?: skckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skcks to fetch.
     */
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skcks.
     */
    cursor?: skckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skcks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skcks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skcks.
     */
    distinct?: SkckScalarFieldEnum | SkckScalarFieldEnum[]
  }

  /**
   * skck findFirstOrThrow
   */
  export type skckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter, which skck to fetch.
     */
    where?: skckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skcks to fetch.
     */
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skcks.
     */
    cursor?: skckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skcks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skcks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skcks.
     */
    distinct?: SkckScalarFieldEnum | SkckScalarFieldEnum[]
  }

  /**
   * skck findMany
   */
  export type skckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter, which skcks to fetch.
     */
    where?: skckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skcks to fetch.
     */
    orderBy?: skckOrderByWithRelationInput | skckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skcks.
     */
    cursor?: skckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skcks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skcks.
     */
    skip?: number
    distinct?: SkckScalarFieldEnum | SkckScalarFieldEnum[]
  }

  /**
   * skck create
   */
  export type skckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * The data needed to create a skck.
     */
    data: XOR<skckCreateInput, skckUncheckedCreateInput>
  }

  /**
   * skck createMany
   */
  export type skckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skcks.
     */
    data: skckCreateManyInput | skckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skck update
   */
  export type skckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * The data needed to update a skck.
     */
    data: XOR<skckUpdateInput, skckUncheckedUpdateInput>
    /**
     * Choose, which skck to update.
     */
    where: skckWhereUniqueInput
  }

  /**
   * skck updateMany
   */
  export type skckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skcks.
     */
    data: XOR<skckUpdateManyMutationInput, skckUncheckedUpdateManyInput>
    /**
     * Filter which skcks to update
     */
    where?: skckWhereInput
  }

  /**
   * skck upsert
   */
  export type skckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * The filter to search for the skck to update in case it exists.
     */
    where: skckWhereUniqueInput
    /**
     * In case the skck found by the `where` argument doesn't exist, create a new skck with this data.
     */
    create: XOR<skckCreateInput, skckUncheckedCreateInput>
    /**
     * In case the skck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skckUpdateInput, skckUncheckedUpdateInput>
  }

  /**
   * skck delete
   */
  export type skckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
    /**
     * Filter which skck to delete.
     */
    where: skckWhereUniqueInput
  }

  /**
   * skck deleteMany
   */
  export type skckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skcks to delete
     */
    where?: skckWhereInput
  }

  /**
   * skck.ttd_skck
   */
  export type skck$ttd_skckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * skck.createdBy
   */
  export type skck$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * skck without action
   */
  export type skckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skck
     */
    select?: skckSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skckInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    user_nama: 'user_nama',
    user_nip: 'user_nip',
    user_email: 'user_email',
    user_hp: 'user_hp',
    user_image: 'user_image',
    user_alamat: 'user_alamat',
    user_jabatan: 'user_jabatan',
    user_name: 'user_name',
    user_pass: 'user_pass',
    user_level: 'user_level',
    user_lastip: 'user_lastip',
    user_lastlogin: 'user_lastlogin',
    user_created: 'user_created',
    user_updated: 'user_updated',
    user_deleted: 'user_deleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const JabatanScalarFieldEnum: {
    jabatan_id: 'jabatan_id',
    jabatan_nama: 'jabatan_nama',
    jabatan_created: 'jabatan_created',
    jabatan_updated: 'jabatan_updated',
    jabatan_deleted: 'jabatan_deleted'
  };

  export type JabatanScalarFieldEnum = (typeof JabatanScalarFieldEnum)[keyof typeof JabatanScalarFieldEnum]


  export const SktmScalarFieldEnum: {
    sktm_id: 'sktm_id',
    sktm_noSurat: 'sktm_noSurat',
    sktm_nama: 'sktm_nama',
    sktm_tgl_lahir: 'sktm_tgl_lahir',
    sktm_tempat_lahir: 'sktm_tempat_lahir',
    sktm_suku: 'sktm_suku',
    sktm_agama: 'sktm_agama',
    sktm_jk: 'sktm_jk',
    sktm_noKtp: 'sktm_noKtp',
    sktm_pekerjaan: 'sktm_pekerjaan',
    sktm_alamat: 'sktm_alamat',
    sktm_dusun: 'sktm_dusun',
    sktm_kepentingan: 'sktm_kepentingan',
    sktm_ttd: 'sktm_ttd',
    sktm_createdBy: 'sktm_createdBy',
    sktm_created: 'sktm_created',
    sktm_updated: 'sktm_updated',
    sktm_deleted: 'sktm_deleted'
  };

  export type SktmScalarFieldEnum = (typeof SktmScalarFieldEnum)[keyof typeof SktmScalarFieldEnum]


  export const BelumNikahScalarFieldEnum: {
    nikah_id: 'nikah_id',
    nikah_nomor: 'nikah_nomor',
    nikah_nama: 'nikah_nama',
    nikah_jk: 'nikah_jk',
    nikah_tempat_lahir: 'nikah_tempat_lahir',
    nikah_tgl_lahir: 'nikah_tgl_lahir',
    nikah_suku: 'nikah_suku',
    nikah_agama: 'nikah_agama',
    nikah_nik: 'nikah_nik',
    nikah_alamat: 'nikah_alamat',
    nikah_kepentingan: 'nikah_kepentingan',
    nikah_ttd: 'nikah_ttd',
    nikah_createdBy: 'nikah_createdBy',
    nikah_created: 'nikah_created',
    nikah_updated: 'nikah_updated',
    nikah_deleted: 'nikah_deleted'
  };

  export type BelumNikahScalarFieldEnum = (typeof BelumNikahScalarFieldEnum)[keyof typeof BelumNikahScalarFieldEnum]


  export const SkckScalarFieldEnum: {
    skck_id: 'skck_id',
    skck_nomor: 'skck_nomor',
    skck_nama: 'skck_nama',
    skck_tempat_lahir: 'skck_tempat_lahir',
    skck_tanggal_lahir: 'skck_tanggal_lahir',
    skck_jk: 'skck_jk',
    skck_agama: 'skck_agama',
    skck_statusKawin: 'skck_statusKawin',
    skck_pekerjaan: 'skck_pekerjaan',
    skck_suku: 'skck_suku',
    skck_nik: 'skck_nik',
    skck_alamat: 'skck_alamat',
    skck_pendidikan_terakhir: 'skck_pendidikan_terakhir',
    skck_kepentingan: 'skck_kepentingan',
    skck_ttd: 'skck_ttd',
    skck_createdBy: 'skck_createdBy',
    skck_created: 'skck_created',
    skck_updated: 'skck_updated',
    skck_deleted: 'skck_deleted'
  };

  export type SkckScalarFieldEnum = (typeof SkckScalarFieldEnum)[keyof typeof SkckScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_nama?: StringFilter<"users"> | string
    user_nip?: StringNullableFilter<"users"> | string | null
    user_email?: StringNullableFilter<"users"> | string | null
    user_hp?: StringFilter<"users"> | string
    user_image?: StringNullableFilter<"users"> | string | null
    user_alamat?: StringFilter<"users"> | string
    user_jabatan?: IntNullableFilter<"users"> | number | null
    user_name?: StringFilter<"users"> | string
    user_pass?: StringFilter<"users"> | string
    user_level?: IntFilter<"users"> | number
    user_lastip?: StringNullableFilter<"users"> | string | null
    user_lastlogin?: StringNullableFilter<"users"> | string | null
    user_created?: DateTimeFilter<"users"> | Date | string
    user_updated?: DateTimeFilter<"users"> | Date | string
    user_deleted?: DateTimeNullableFilter<"users"> | Date | string | null
    jabatan?: XOR<JabatanNullableRelationFilter, jabatanWhereInput> | null
    sktm?: SktmListRelationFilter
    sktm_createdBy?: SktmListRelationFilter
    belumNikah?: BelumNikahListRelationFilter
    nikah_createdBy?: BelumNikahListRelationFilter
    skck?: SkckListRelationFilter
    skck_createdBy?: SkckListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    user_nama?: SortOrder
    user_nip?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    user_hp?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_alamat?: SortOrder
    user_jabatan?: SortOrderInput | SortOrder
    user_name?: SortOrder
    user_pass?: SortOrder
    user_level?: SortOrder
    user_lastip?: SortOrderInput | SortOrder
    user_lastlogin?: SortOrderInput | SortOrder
    user_created?: SortOrder
    user_updated?: SortOrder
    user_deleted?: SortOrderInput | SortOrder
    jabatan?: jabatanOrderByWithRelationInput
    sktm?: sktmOrderByRelationAggregateInput
    sktm_createdBy?: sktmOrderByRelationAggregateInput
    belumNikah?: belumNikahOrderByRelationAggregateInput
    nikah_createdBy?: belumNikahOrderByRelationAggregateInput
    skck?: skckOrderByRelationAggregateInput
    skck_createdBy?: skckOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_nip?: string
    user_name?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_nama?: StringFilter<"users"> | string
    user_email?: StringNullableFilter<"users"> | string | null
    user_hp?: StringFilter<"users"> | string
    user_image?: StringNullableFilter<"users"> | string | null
    user_alamat?: StringFilter<"users"> | string
    user_jabatan?: IntNullableFilter<"users"> | number | null
    user_pass?: StringFilter<"users"> | string
    user_level?: IntFilter<"users"> | number
    user_lastip?: StringNullableFilter<"users"> | string | null
    user_lastlogin?: StringNullableFilter<"users"> | string | null
    user_created?: DateTimeFilter<"users"> | Date | string
    user_updated?: DateTimeFilter<"users"> | Date | string
    user_deleted?: DateTimeNullableFilter<"users"> | Date | string | null
    jabatan?: XOR<JabatanNullableRelationFilter, jabatanWhereInput> | null
    sktm?: SktmListRelationFilter
    sktm_createdBy?: SktmListRelationFilter
    belumNikah?: BelumNikahListRelationFilter
    nikah_createdBy?: BelumNikahListRelationFilter
    skck?: SkckListRelationFilter
    skck_createdBy?: SkckListRelationFilter
  }, "user_id" | "user_nip" | "user_name">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_nama?: SortOrder
    user_nip?: SortOrderInput | SortOrder
    user_email?: SortOrderInput | SortOrder
    user_hp?: SortOrder
    user_image?: SortOrderInput | SortOrder
    user_alamat?: SortOrder
    user_jabatan?: SortOrderInput | SortOrder
    user_name?: SortOrder
    user_pass?: SortOrder
    user_level?: SortOrder
    user_lastip?: SortOrderInput | SortOrder
    user_lastlogin?: SortOrderInput | SortOrder
    user_created?: SortOrder
    user_updated?: SortOrder
    user_deleted?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    user_nama?: StringWithAggregatesFilter<"users"> | string
    user_nip?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_email?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_hp?: StringWithAggregatesFilter<"users"> | string
    user_image?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_alamat?: StringWithAggregatesFilter<"users"> | string
    user_jabatan?: IntNullableWithAggregatesFilter<"users"> | number | null
    user_name?: StringWithAggregatesFilter<"users"> | string
    user_pass?: StringWithAggregatesFilter<"users"> | string
    user_level?: IntWithAggregatesFilter<"users"> | number
    user_lastip?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_lastlogin?: StringNullableWithAggregatesFilter<"users"> | string | null
    user_created?: DateTimeWithAggregatesFilter<"users"> | Date | string
    user_updated?: DateTimeWithAggregatesFilter<"users"> | Date | string
    user_deleted?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type jabatanWhereInput = {
    AND?: jabatanWhereInput | jabatanWhereInput[]
    OR?: jabatanWhereInput[]
    NOT?: jabatanWhereInput | jabatanWhereInput[]
    jabatan_id?: IntFilter<"jabatan"> | number
    jabatan_nama?: StringFilter<"jabatan"> | string
    jabatan_created?: DateTimeFilter<"jabatan"> | Date | string
    jabatan_updated?: DateTimeFilter<"jabatan"> | Date | string
    jabatan_deleted?: DateTimeNullableFilter<"jabatan"> | Date | string | null
    users?: UsersListRelationFilter
  }

  export type jabatanOrderByWithRelationInput = {
    jabatan_id?: SortOrder
    jabatan_nama?: SortOrder
    jabatan_created?: SortOrder
    jabatan_updated?: SortOrder
    jabatan_deleted?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type jabatanWhereUniqueInput = Prisma.AtLeast<{
    jabatan_id?: number
    AND?: jabatanWhereInput | jabatanWhereInput[]
    OR?: jabatanWhereInput[]
    NOT?: jabatanWhereInput | jabatanWhereInput[]
    jabatan_nama?: StringFilter<"jabatan"> | string
    jabatan_created?: DateTimeFilter<"jabatan"> | Date | string
    jabatan_updated?: DateTimeFilter<"jabatan"> | Date | string
    jabatan_deleted?: DateTimeNullableFilter<"jabatan"> | Date | string | null
    users?: UsersListRelationFilter
  }, "jabatan_id">

  export type jabatanOrderByWithAggregationInput = {
    jabatan_id?: SortOrder
    jabatan_nama?: SortOrder
    jabatan_created?: SortOrder
    jabatan_updated?: SortOrder
    jabatan_deleted?: SortOrderInput | SortOrder
    _count?: jabatanCountOrderByAggregateInput
    _avg?: jabatanAvgOrderByAggregateInput
    _max?: jabatanMaxOrderByAggregateInput
    _min?: jabatanMinOrderByAggregateInput
    _sum?: jabatanSumOrderByAggregateInput
  }

  export type jabatanScalarWhereWithAggregatesInput = {
    AND?: jabatanScalarWhereWithAggregatesInput | jabatanScalarWhereWithAggregatesInput[]
    OR?: jabatanScalarWhereWithAggregatesInput[]
    NOT?: jabatanScalarWhereWithAggregatesInput | jabatanScalarWhereWithAggregatesInput[]
    jabatan_id?: IntWithAggregatesFilter<"jabatan"> | number
    jabatan_nama?: StringWithAggregatesFilter<"jabatan"> | string
    jabatan_created?: DateTimeWithAggregatesFilter<"jabatan"> | Date | string
    jabatan_updated?: DateTimeWithAggregatesFilter<"jabatan"> | Date | string
    jabatan_deleted?: DateTimeNullableWithAggregatesFilter<"jabatan"> | Date | string | null
  }

  export type sktmWhereInput = {
    AND?: sktmWhereInput | sktmWhereInput[]
    OR?: sktmWhereInput[]
    NOT?: sktmWhereInput | sktmWhereInput[]
    sktm_id?: IntFilter<"sktm"> | number
    sktm_noSurat?: StringNullableFilter<"sktm"> | string | null
    sktm_nama?: StringFilter<"sktm"> | string
    sktm_tgl_lahir?: DateTimeFilter<"sktm"> | Date | string
    sktm_tempat_lahir?: StringFilter<"sktm"> | string
    sktm_suku?: StringFilter<"sktm"> | string
    sktm_agama?: IntFilter<"sktm"> | number
    sktm_jk?: IntFilter<"sktm"> | number
    sktm_noKtp?: StringFilter<"sktm"> | string
    sktm_pekerjaan?: StringFilter<"sktm"> | string
    sktm_alamat?: StringFilter<"sktm"> | string
    sktm_dusun?: StringFilter<"sktm"> | string
    sktm_kepentingan?: StringFilter<"sktm"> | string
    sktm_ttd?: IntNullableFilter<"sktm"> | number | null
    sktm_createdBy?: IntNullableFilter<"sktm"> | number | null
    sktm_created?: DateTimeFilter<"sktm"> | Date | string
    sktm_updated?: DateTimeFilter<"sktm"> | Date | string
    sktm_deleted?: DateTimeNullableFilter<"sktm"> | Date | string | null
    ttd_sktm?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    created_by?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type sktmOrderByWithRelationInput = {
    sktm_id?: SortOrder
    sktm_noSurat?: SortOrderInput | SortOrder
    sktm_nama?: SortOrder
    sktm_tgl_lahir?: SortOrder
    sktm_tempat_lahir?: SortOrder
    sktm_suku?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_noKtp?: SortOrder
    sktm_pekerjaan?: SortOrder
    sktm_alamat?: SortOrder
    sktm_dusun?: SortOrder
    sktm_kepentingan?: SortOrder
    sktm_ttd?: SortOrderInput | SortOrder
    sktm_createdBy?: SortOrderInput | SortOrder
    sktm_created?: SortOrder
    sktm_updated?: SortOrder
    sktm_deleted?: SortOrderInput | SortOrder
    ttd_sktm?: usersOrderByWithRelationInput
    created_by?: usersOrderByWithRelationInput
  }

  export type sktmWhereUniqueInput = Prisma.AtLeast<{
    sktm_id?: number
    AND?: sktmWhereInput | sktmWhereInput[]
    OR?: sktmWhereInput[]
    NOT?: sktmWhereInput | sktmWhereInput[]
    sktm_noSurat?: StringNullableFilter<"sktm"> | string | null
    sktm_nama?: StringFilter<"sktm"> | string
    sktm_tgl_lahir?: DateTimeFilter<"sktm"> | Date | string
    sktm_tempat_lahir?: StringFilter<"sktm"> | string
    sktm_suku?: StringFilter<"sktm"> | string
    sktm_agama?: IntFilter<"sktm"> | number
    sktm_jk?: IntFilter<"sktm"> | number
    sktm_noKtp?: StringFilter<"sktm"> | string
    sktm_pekerjaan?: StringFilter<"sktm"> | string
    sktm_alamat?: StringFilter<"sktm"> | string
    sktm_dusun?: StringFilter<"sktm"> | string
    sktm_kepentingan?: StringFilter<"sktm"> | string
    sktm_ttd?: IntNullableFilter<"sktm"> | number | null
    sktm_createdBy?: IntNullableFilter<"sktm"> | number | null
    sktm_created?: DateTimeFilter<"sktm"> | Date | string
    sktm_updated?: DateTimeFilter<"sktm"> | Date | string
    sktm_deleted?: DateTimeNullableFilter<"sktm"> | Date | string | null
    ttd_sktm?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    created_by?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "sktm_id">

  export type sktmOrderByWithAggregationInput = {
    sktm_id?: SortOrder
    sktm_noSurat?: SortOrderInput | SortOrder
    sktm_nama?: SortOrder
    sktm_tgl_lahir?: SortOrder
    sktm_tempat_lahir?: SortOrder
    sktm_suku?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_noKtp?: SortOrder
    sktm_pekerjaan?: SortOrder
    sktm_alamat?: SortOrder
    sktm_dusun?: SortOrder
    sktm_kepentingan?: SortOrder
    sktm_ttd?: SortOrderInput | SortOrder
    sktm_createdBy?: SortOrderInput | SortOrder
    sktm_created?: SortOrder
    sktm_updated?: SortOrder
    sktm_deleted?: SortOrderInput | SortOrder
    _count?: sktmCountOrderByAggregateInput
    _avg?: sktmAvgOrderByAggregateInput
    _max?: sktmMaxOrderByAggregateInput
    _min?: sktmMinOrderByAggregateInput
    _sum?: sktmSumOrderByAggregateInput
  }

  export type sktmScalarWhereWithAggregatesInput = {
    AND?: sktmScalarWhereWithAggregatesInput | sktmScalarWhereWithAggregatesInput[]
    OR?: sktmScalarWhereWithAggregatesInput[]
    NOT?: sktmScalarWhereWithAggregatesInput | sktmScalarWhereWithAggregatesInput[]
    sktm_id?: IntWithAggregatesFilter<"sktm"> | number
    sktm_noSurat?: StringNullableWithAggregatesFilter<"sktm"> | string | null
    sktm_nama?: StringWithAggregatesFilter<"sktm"> | string
    sktm_tgl_lahir?: DateTimeWithAggregatesFilter<"sktm"> | Date | string
    sktm_tempat_lahir?: StringWithAggregatesFilter<"sktm"> | string
    sktm_suku?: StringWithAggregatesFilter<"sktm"> | string
    sktm_agama?: IntWithAggregatesFilter<"sktm"> | number
    sktm_jk?: IntWithAggregatesFilter<"sktm"> | number
    sktm_noKtp?: StringWithAggregatesFilter<"sktm"> | string
    sktm_pekerjaan?: StringWithAggregatesFilter<"sktm"> | string
    sktm_alamat?: StringWithAggregatesFilter<"sktm"> | string
    sktm_dusun?: StringWithAggregatesFilter<"sktm"> | string
    sktm_kepentingan?: StringWithAggregatesFilter<"sktm"> | string
    sktm_ttd?: IntNullableWithAggregatesFilter<"sktm"> | number | null
    sktm_createdBy?: IntNullableWithAggregatesFilter<"sktm"> | number | null
    sktm_created?: DateTimeWithAggregatesFilter<"sktm"> | Date | string
    sktm_updated?: DateTimeWithAggregatesFilter<"sktm"> | Date | string
    sktm_deleted?: DateTimeNullableWithAggregatesFilter<"sktm"> | Date | string | null
  }

  export type belumNikahWhereInput = {
    AND?: belumNikahWhereInput | belumNikahWhereInput[]
    OR?: belumNikahWhereInput[]
    NOT?: belumNikahWhereInput | belumNikahWhereInput[]
    nikah_id?: IntFilter<"belumNikah"> | number
    nikah_nomor?: StringNullableFilter<"belumNikah"> | string | null
    nikah_nama?: StringFilter<"belumNikah"> | string
    nikah_jk?: IntFilter<"belumNikah"> | number
    nikah_tempat_lahir?: StringFilter<"belumNikah"> | string
    nikah_tgl_lahir?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_suku?: StringFilter<"belumNikah"> | string
    nikah_agama?: IntFilter<"belumNikah"> | number
    nikah_nik?: StringFilter<"belumNikah"> | string
    nikah_alamat?: StringFilter<"belumNikah"> | string
    nikah_kepentingan?: StringFilter<"belumNikah"> | string
    nikah_ttd?: IntNullableFilter<"belumNikah"> | number | null
    nikah_createdBy?: IntNullableFilter<"belumNikah"> | number | null
    nikah_created?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_updated?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_deleted?: DateTimeNullableFilter<"belumNikah"> | Date | string | null
    ttd_nikah?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    created_by?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type belumNikahOrderByWithRelationInput = {
    nikah_id?: SortOrder
    nikah_nomor?: SortOrderInput | SortOrder
    nikah_nama?: SortOrder
    nikah_jk?: SortOrder
    nikah_tempat_lahir?: SortOrder
    nikah_tgl_lahir?: SortOrder
    nikah_suku?: SortOrder
    nikah_agama?: SortOrder
    nikah_nik?: SortOrder
    nikah_alamat?: SortOrder
    nikah_kepentingan?: SortOrder
    nikah_ttd?: SortOrderInput | SortOrder
    nikah_createdBy?: SortOrderInput | SortOrder
    nikah_created?: SortOrder
    nikah_updated?: SortOrder
    nikah_deleted?: SortOrderInput | SortOrder
    ttd_nikah?: usersOrderByWithRelationInput
    created_by?: usersOrderByWithRelationInput
  }

  export type belumNikahWhereUniqueInput = Prisma.AtLeast<{
    nikah_id?: number
    AND?: belumNikahWhereInput | belumNikahWhereInput[]
    OR?: belumNikahWhereInput[]
    NOT?: belumNikahWhereInput | belumNikahWhereInput[]
    nikah_nomor?: StringNullableFilter<"belumNikah"> | string | null
    nikah_nama?: StringFilter<"belumNikah"> | string
    nikah_jk?: IntFilter<"belumNikah"> | number
    nikah_tempat_lahir?: StringFilter<"belumNikah"> | string
    nikah_tgl_lahir?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_suku?: StringFilter<"belumNikah"> | string
    nikah_agama?: IntFilter<"belumNikah"> | number
    nikah_nik?: StringFilter<"belumNikah"> | string
    nikah_alamat?: StringFilter<"belumNikah"> | string
    nikah_kepentingan?: StringFilter<"belumNikah"> | string
    nikah_ttd?: IntNullableFilter<"belumNikah"> | number | null
    nikah_createdBy?: IntNullableFilter<"belumNikah"> | number | null
    nikah_created?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_updated?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_deleted?: DateTimeNullableFilter<"belumNikah"> | Date | string | null
    ttd_nikah?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    created_by?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "nikah_id">

  export type belumNikahOrderByWithAggregationInput = {
    nikah_id?: SortOrder
    nikah_nomor?: SortOrderInput | SortOrder
    nikah_nama?: SortOrder
    nikah_jk?: SortOrder
    nikah_tempat_lahir?: SortOrder
    nikah_tgl_lahir?: SortOrder
    nikah_suku?: SortOrder
    nikah_agama?: SortOrder
    nikah_nik?: SortOrder
    nikah_alamat?: SortOrder
    nikah_kepentingan?: SortOrder
    nikah_ttd?: SortOrderInput | SortOrder
    nikah_createdBy?: SortOrderInput | SortOrder
    nikah_created?: SortOrder
    nikah_updated?: SortOrder
    nikah_deleted?: SortOrderInput | SortOrder
    _count?: belumNikahCountOrderByAggregateInput
    _avg?: belumNikahAvgOrderByAggregateInput
    _max?: belumNikahMaxOrderByAggregateInput
    _min?: belumNikahMinOrderByAggregateInput
    _sum?: belumNikahSumOrderByAggregateInput
  }

  export type belumNikahScalarWhereWithAggregatesInput = {
    AND?: belumNikahScalarWhereWithAggregatesInput | belumNikahScalarWhereWithAggregatesInput[]
    OR?: belumNikahScalarWhereWithAggregatesInput[]
    NOT?: belumNikahScalarWhereWithAggregatesInput | belumNikahScalarWhereWithAggregatesInput[]
    nikah_id?: IntWithAggregatesFilter<"belumNikah"> | number
    nikah_nomor?: StringNullableWithAggregatesFilter<"belumNikah"> | string | null
    nikah_nama?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_jk?: IntWithAggregatesFilter<"belumNikah"> | number
    nikah_tempat_lahir?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_tgl_lahir?: DateTimeWithAggregatesFilter<"belumNikah"> | Date | string
    nikah_suku?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_agama?: IntWithAggregatesFilter<"belumNikah"> | number
    nikah_nik?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_alamat?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_kepentingan?: StringWithAggregatesFilter<"belumNikah"> | string
    nikah_ttd?: IntNullableWithAggregatesFilter<"belumNikah"> | number | null
    nikah_createdBy?: IntNullableWithAggregatesFilter<"belumNikah"> | number | null
    nikah_created?: DateTimeWithAggregatesFilter<"belumNikah"> | Date | string
    nikah_updated?: DateTimeWithAggregatesFilter<"belumNikah"> | Date | string
    nikah_deleted?: DateTimeNullableWithAggregatesFilter<"belumNikah"> | Date | string | null
  }

  export type skckWhereInput = {
    AND?: skckWhereInput | skckWhereInput[]
    OR?: skckWhereInput[]
    NOT?: skckWhereInput | skckWhereInput[]
    skck_id?: IntFilter<"skck"> | number
    skck_nomor?: StringNullableFilter<"skck"> | string | null
    skck_nama?: StringFilter<"skck"> | string
    skck_tempat_lahir?: StringFilter<"skck"> | string
    skck_tanggal_lahir?: DateTimeFilter<"skck"> | Date | string
    skck_jk?: IntFilter<"skck"> | number
    skck_agama?: IntFilter<"skck"> | number
    skck_statusKawin?: IntFilter<"skck"> | number
    skck_pekerjaan?: StringFilter<"skck"> | string
    skck_suku?: StringFilter<"skck"> | string
    skck_nik?: StringFilter<"skck"> | string
    skck_alamat?: StringFilter<"skck"> | string
    skck_pendidikan_terakhir?: IntFilter<"skck"> | number
    skck_kepentingan?: StringFilter<"skck"> | string
    skck_ttd?: IntNullableFilter<"skck"> | number | null
    skck_createdBy?: IntNullableFilter<"skck"> | number | null
    skck_created?: DateTimeFilter<"skck"> | Date | string
    skck_updated?: DateTimeFilter<"skck"> | Date | string
    skck_deleted?: DateTimeNullableFilter<"skck"> | Date | string | null
    ttd_skck?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    createdBy?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type skckOrderByWithRelationInput = {
    skck_id?: SortOrder
    skck_nomor?: SortOrderInput | SortOrder
    skck_nama?: SortOrder
    skck_tempat_lahir?: SortOrder
    skck_tanggal_lahir?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pekerjaan?: SortOrder
    skck_suku?: SortOrder
    skck_nik?: SortOrder
    skck_alamat?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_kepentingan?: SortOrder
    skck_ttd?: SortOrderInput | SortOrder
    skck_createdBy?: SortOrderInput | SortOrder
    skck_created?: SortOrder
    skck_updated?: SortOrder
    skck_deleted?: SortOrderInput | SortOrder
    ttd_skck?: usersOrderByWithRelationInput
    createdBy?: usersOrderByWithRelationInput
  }

  export type skckWhereUniqueInput = Prisma.AtLeast<{
    skck_id?: number
    AND?: skckWhereInput | skckWhereInput[]
    OR?: skckWhereInput[]
    NOT?: skckWhereInput | skckWhereInput[]
    skck_nomor?: StringNullableFilter<"skck"> | string | null
    skck_nama?: StringFilter<"skck"> | string
    skck_tempat_lahir?: StringFilter<"skck"> | string
    skck_tanggal_lahir?: DateTimeFilter<"skck"> | Date | string
    skck_jk?: IntFilter<"skck"> | number
    skck_agama?: IntFilter<"skck"> | number
    skck_statusKawin?: IntFilter<"skck"> | number
    skck_pekerjaan?: StringFilter<"skck"> | string
    skck_suku?: StringFilter<"skck"> | string
    skck_nik?: StringFilter<"skck"> | string
    skck_alamat?: StringFilter<"skck"> | string
    skck_pendidikan_terakhir?: IntFilter<"skck"> | number
    skck_kepentingan?: StringFilter<"skck"> | string
    skck_ttd?: IntNullableFilter<"skck"> | number | null
    skck_createdBy?: IntNullableFilter<"skck"> | number | null
    skck_created?: DateTimeFilter<"skck"> | Date | string
    skck_updated?: DateTimeFilter<"skck"> | Date | string
    skck_deleted?: DateTimeNullableFilter<"skck"> | Date | string | null
    ttd_skck?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    createdBy?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "skck_id">

  export type skckOrderByWithAggregationInput = {
    skck_id?: SortOrder
    skck_nomor?: SortOrderInput | SortOrder
    skck_nama?: SortOrder
    skck_tempat_lahir?: SortOrder
    skck_tanggal_lahir?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pekerjaan?: SortOrder
    skck_suku?: SortOrder
    skck_nik?: SortOrder
    skck_alamat?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_kepentingan?: SortOrder
    skck_ttd?: SortOrderInput | SortOrder
    skck_createdBy?: SortOrderInput | SortOrder
    skck_created?: SortOrder
    skck_updated?: SortOrder
    skck_deleted?: SortOrderInput | SortOrder
    _count?: skckCountOrderByAggregateInput
    _avg?: skckAvgOrderByAggregateInput
    _max?: skckMaxOrderByAggregateInput
    _min?: skckMinOrderByAggregateInput
    _sum?: skckSumOrderByAggregateInput
  }

  export type skckScalarWhereWithAggregatesInput = {
    AND?: skckScalarWhereWithAggregatesInput | skckScalarWhereWithAggregatesInput[]
    OR?: skckScalarWhereWithAggregatesInput[]
    NOT?: skckScalarWhereWithAggregatesInput | skckScalarWhereWithAggregatesInput[]
    skck_id?: IntWithAggregatesFilter<"skck"> | number
    skck_nomor?: StringNullableWithAggregatesFilter<"skck"> | string | null
    skck_nama?: StringWithAggregatesFilter<"skck"> | string
    skck_tempat_lahir?: StringWithAggregatesFilter<"skck"> | string
    skck_tanggal_lahir?: DateTimeWithAggregatesFilter<"skck"> | Date | string
    skck_jk?: IntWithAggregatesFilter<"skck"> | number
    skck_agama?: IntWithAggregatesFilter<"skck"> | number
    skck_statusKawin?: IntWithAggregatesFilter<"skck"> | number
    skck_pekerjaan?: StringWithAggregatesFilter<"skck"> | string
    skck_suku?: StringWithAggregatesFilter<"skck"> | string
    skck_nik?: StringWithAggregatesFilter<"skck"> | string
    skck_alamat?: StringWithAggregatesFilter<"skck"> | string
    skck_pendidikan_terakhir?: IntWithAggregatesFilter<"skck"> | number
    skck_kepentingan?: StringWithAggregatesFilter<"skck"> | string
    skck_ttd?: IntNullableWithAggregatesFilter<"skck"> | number | null
    skck_createdBy?: IntNullableWithAggregatesFilter<"skck"> | number | null
    skck_created?: DateTimeWithAggregatesFilter<"skck"> | Date | string
    skck_updated?: DateTimeWithAggregatesFilter<"skck"> | Date | string
    skck_deleted?: DateTimeNullableWithAggregatesFilter<"skck"> | Date | string | null
  }

  export type usersCreateInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersUpdateInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jabatanCreateInput = {
    jabatan_nama: string
    jabatan_created?: Date | string
    jabatan_updated?: Date | string
    jabatan_deleted?: Date | string | null
    users?: usersCreateNestedManyWithoutJabatanInput
  }

  export type jabatanUncheckedCreateInput = {
    jabatan_id?: number
    jabatan_nama: string
    jabatan_created?: Date | string
    jabatan_updated?: Date | string
    jabatan_deleted?: Date | string | null
    users?: usersUncheckedCreateNestedManyWithoutJabatanInput
  }

  export type jabatanUpdateInput = {
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateManyWithoutJabatanNestedInput
  }

  export type jabatanUncheckedUpdateInput = {
    jabatan_id?: IntFieldUpdateOperationsInput | number
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUncheckedUpdateManyWithoutJabatanNestedInput
  }

  export type jabatanCreateManyInput = {
    jabatan_id?: number
    jabatan_nama: string
    jabatan_created?: Date | string
    jabatan_updated?: Date | string
    jabatan_deleted?: Date | string | null
  }

  export type jabatanUpdateManyMutationInput = {
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jabatanUncheckedUpdateManyInput = {
    jabatan_id?: IntFieldUpdateOperationsInput | number
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmCreateInput = {
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
    ttd_sktm?: usersCreateNestedOneWithoutSktmInput
    created_by?: usersCreateNestedOneWithoutSktm_createdByInput
  }

  export type sktmUncheckedCreateInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_ttd?: number | null
    sktm_createdBy?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type sktmUpdateInput = {
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_sktm?: usersUpdateOneWithoutSktmNestedInput
    created_by?: usersUpdateOneWithoutSktm_createdByNestedInput
  }

  export type sktmUncheckedUpdateInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmCreateManyInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_ttd?: number | null
    sktm_createdBy?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type sktmUpdateManyMutationInput = {
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmUncheckedUpdateManyInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahCreateInput = {
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
    ttd_nikah?: usersCreateNestedOneWithoutBelumNikahInput
    created_by?: usersCreateNestedOneWithoutNikah_createdByInput
  }

  export type belumNikahUncheckedCreateInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_ttd?: number | null
    nikah_createdBy?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type belumNikahUpdateInput = {
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_nikah?: usersUpdateOneWithoutBelumNikahNestedInput
    created_by?: usersUpdateOneWithoutNikah_createdByNestedInput
  }

  export type belumNikahUncheckedUpdateInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahCreateManyInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_ttd?: number | null
    nikah_createdBy?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type belumNikahUpdateManyMutationInput = {
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahUncheckedUpdateManyInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckCreateInput = {
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
    ttd_skck?: usersCreateNestedOneWithoutSkckInput
    createdBy?: usersCreateNestedOneWithoutSkck_createdByInput
  }

  export type skckUncheckedCreateInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_ttd?: number | null
    skck_createdBy?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type skckUpdateInput = {
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_skck?: usersUpdateOneWithoutSkckNestedInput
    createdBy?: usersUpdateOneWithoutSkck_createdByNestedInput
  }

  export type skckUncheckedUpdateInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    skck_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckCreateManyInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_ttd?: number | null
    skck_createdBy?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type skckUpdateManyMutationInput = {
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckUncheckedUpdateManyInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    skck_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type JabatanNullableRelationFilter = {
    is?: jabatanWhereInput | null
    isNot?: jabatanWhereInput | null
  }

  export type SktmListRelationFilter = {
    every?: sktmWhereInput
    some?: sktmWhereInput
    none?: sktmWhereInput
  }

  export type BelumNikahListRelationFilter = {
    every?: belumNikahWhereInput
    some?: belumNikahWhereInput
    none?: belumNikahWhereInput
  }

  export type SkckListRelationFilter = {
    every?: skckWhereInput
    some?: skckWhereInput
    none?: skckWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sktmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type belumNikahOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_nama?: SortOrder
    user_nip?: SortOrder
    user_email?: SortOrder
    user_hp?: SortOrder
    user_image?: SortOrder
    user_alamat?: SortOrder
    user_jabatan?: SortOrder
    user_name?: SortOrder
    user_pass?: SortOrder
    user_level?: SortOrder
    user_lastip?: SortOrder
    user_lastlogin?: SortOrder
    user_created?: SortOrder
    user_updated?: SortOrder
    user_deleted?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    user_jabatan?: SortOrder
    user_level?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_nama?: SortOrder
    user_nip?: SortOrder
    user_email?: SortOrder
    user_hp?: SortOrder
    user_image?: SortOrder
    user_alamat?: SortOrder
    user_jabatan?: SortOrder
    user_name?: SortOrder
    user_pass?: SortOrder
    user_level?: SortOrder
    user_lastip?: SortOrder
    user_lastlogin?: SortOrder
    user_created?: SortOrder
    user_updated?: SortOrder
    user_deleted?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_nama?: SortOrder
    user_nip?: SortOrder
    user_email?: SortOrder
    user_hp?: SortOrder
    user_image?: SortOrder
    user_alamat?: SortOrder
    user_jabatan?: SortOrder
    user_name?: SortOrder
    user_pass?: SortOrder
    user_level?: SortOrder
    user_lastip?: SortOrder
    user_lastlogin?: SortOrder
    user_created?: SortOrder
    user_updated?: SortOrder
    user_deleted?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    user_jabatan?: SortOrder
    user_level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jabatanCountOrderByAggregateInput = {
    jabatan_id?: SortOrder
    jabatan_nama?: SortOrder
    jabatan_created?: SortOrder
    jabatan_updated?: SortOrder
    jabatan_deleted?: SortOrder
  }

  export type jabatanAvgOrderByAggregateInput = {
    jabatan_id?: SortOrder
  }

  export type jabatanMaxOrderByAggregateInput = {
    jabatan_id?: SortOrder
    jabatan_nama?: SortOrder
    jabatan_created?: SortOrder
    jabatan_updated?: SortOrder
    jabatan_deleted?: SortOrder
  }

  export type jabatanMinOrderByAggregateInput = {
    jabatan_id?: SortOrder
    jabatan_nama?: SortOrder
    jabatan_created?: SortOrder
    jabatan_updated?: SortOrder
    jabatan_deleted?: SortOrder
  }

  export type jabatanSumOrderByAggregateInput = {
    jabatan_id?: SortOrder
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type sktmCountOrderByAggregateInput = {
    sktm_id?: SortOrder
    sktm_noSurat?: SortOrder
    sktm_nama?: SortOrder
    sktm_tgl_lahir?: SortOrder
    sktm_tempat_lahir?: SortOrder
    sktm_suku?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_noKtp?: SortOrder
    sktm_pekerjaan?: SortOrder
    sktm_alamat?: SortOrder
    sktm_dusun?: SortOrder
    sktm_kepentingan?: SortOrder
    sktm_ttd?: SortOrder
    sktm_createdBy?: SortOrder
    sktm_created?: SortOrder
    sktm_updated?: SortOrder
    sktm_deleted?: SortOrder
  }

  export type sktmAvgOrderByAggregateInput = {
    sktm_id?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_ttd?: SortOrder
    sktm_createdBy?: SortOrder
  }

  export type sktmMaxOrderByAggregateInput = {
    sktm_id?: SortOrder
    sktm_noSurat?: SortOrder
    sktm_nama?: SortOrder
    sktm_tgl_lahir?: SortOrder
    sktm_tempat_lahir?: SortOrder
    sktm_suku?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_noKtp?: SortOrder
    sktm_pekerjaan?: SortOrder
    sktm_alamat?: SortOrder
    sktm_dusun?: SortOrder
    sktm_kepentingan?: SortOrder
    sktm_ttd?: SortOrder
    sktm_createdBy?: SortOrder
    sktm_created?: SortOrder
    sktm_updated?: SortOrder
    sktm_deleted?: SortOrder
  }

  export type sktmMinOrderByAggregateInput = {
    sktm_id?: SortOrder
    sktm_noSurat?: SortOrder
    sktm_nama?: SortOrder
    sktm_tgl_lahir?: SortOrder
    sktm_tempat_lahir?: SortOrder
    sktm_suku?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_noKtp?: SortOrder
    sktm_pekerjaan?: SortOrder
    sktm_alamat?: SortOrder
    sktm_dusun?: SortOrder
    sktm_kepentingan?: SortOrder
    sktm_ttd?: SortOrder
    sktm_createdBy?: SortOrder
    sktm_created?: SortOrder
    sktm_updated?: SortOrder
    sktm_deleted?: SortOrder
  }

  export type sktmSumOrderByAggregateInput = {
    sktm_id?: SortOrder
    sktm_agama?: SortOrder
    sktm_jk?: SortOrder
    sktm_ttd?: SortOrder
    sktm_createdBy?: SortOrder
  }

  export type belumNikahCountOrderByAggregateInput = {
    nikah_id?: SortOrder
    nikah_nomor?: SortOrder
    nikah_nama?: SortOrder
    nikah_jk?: SortOrder
    nikah_tempat_lahir?: SortOrder
    nikah_tgl_lahir?: SortOrder
    nikah_suku?: SortOrder
    nikah_agama?: SortOrder
    nikah_nik?: SortOrder
    nikah_alamat?: SortOrder
    nikah_kepentingan?: SortOrder
    nikah_ttd?: SortOrder
    nikah_createdBy?: SortOrder
    nikah_created?: SortOrder
    nikah_updated?: SortOrder
    nikah_deleted?: SortOrder
  }

  export type belumNikahAvgOrderByAggregateInput = {
    nikah_id?: SortOrder
    nikah_jk?: SortOrder
    nikah_agama?: SortOrder
    nikah_ttd?: SortOrder
    nikah_createdBy?: SortOrder
  }

  export type belumNikahMaxOrderByAggregateInput = {
    nikah_id?: SortOrder
    nikah_nomor?: SortOrder
    nikah_nama?: SortOrder
    nikah_jk?: SortOrder
    nikah_tempat_lahir?: SortOrder
    nikah_tgl_lahir?: SortOrder
    nikah_suku?: SortOrder
    nikah_agama?: SortOrder
    nikah_nik?: SortOrder
    nikah_alamat?: SortOrder
    nikah_kepentingan?: SortOrder
    nikah_ttd?: SortOrder
    nikah_createdBy?: SortOrder
    nikah_created?: SortOrder
    nikah_updated?: SortOrder
    nikah_deleted?: SortOrder
  }

  export type belumNikahMinOrderByAggregateInput = {
    nikah_id?: SortOrder
    nikah_nomor?: SortOrder
    nikah_nama?: SortOrder
    nikah_jk?: SortOrder
    nikah_tempat_lahir?: SortOrder
    nikah_tgl_lahir?: SortOrder
    nikah_suku?: SortOrder
    nikah_agama?: SortOrder
    nikah_nik?: SortOrder
    nikah_alamat?: SortOrder
    nikah_kepentingan?: SortOrder
    nikah_ttd?: SortOrder
    nikah_createdBy?: SortOrder
    nikah_created?: SortOrder
    nikah_updated?: SortOrder
    nikah_deleted?: SortOrder
  }

  export type belumNikahSumOrderByAggregateInput = {
    nikah_id?: SortOrder
    nikah_jk?: SortOrder
    nikah_agama?: SortOrder
    nikah_ttd?: SortOrder
    nikah_createdBy?: SortOrder
  }

  export type skckCountOrderByAggregateInput = {
    skck_id?: SortOrder
    skck_nomor?: SortOrder
    skck_nama?: SortOrder
    skck_tempat_lahir?: SortOrder
    skck_tanggal_lahir?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pekerjaan?: SortOrder
    skck_suku?: SortOrder
    skck_nik?: SortOrder
    skck_alamat?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_kepentingan?: SortOrder
    skck_ttd?: SortOrder
    skck_createdBy?: SortOrder
    skck_created?: SortOrder
    skck_updated?: SortOrder
    skck_deleted?: SortOrder
  }

  export type skckAvgOrderByAggregateInput = {
    skck_id?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_ttd?: SortOrder
    skck_createdBy?: SortOrder
  }

  export type skckMaxOrderByAggregateInput = {
    skck_id?: SortOrder
    skck_nomor?: SortOrder
    skck_nama?: SortOrder
    skck_tempat_lahir?: SortOrder
    skck_tanggal_lahir?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pekerjaan?: SortOrder
    skck_suku?: SortOrder
    skck_nik?: SortOrder
    skck_alamat?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_kepentingan?: SortOrder
    skck_ttd?: SortOrder
    skck_createdBy?: SortOrder
    skck_created?: SortOrder
    skck_updated?: SortOrder
    skck_deleted?: SortOrder
  }

  export type skckMinOrderByAggregateInput = {
    skck_id?: SortOrder
    skck_nomor?: SortOrder
    skck_nama?: SortOrder
    skck_tempat_lahir?: SortOrder
    skck_tanggal_lahir?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pekerjaan?: SortOrder
    skck_suku?: SortOrder
    skck_nik?: SortOrder
    skck_alamat?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_kepentingan?: SortOrder
    skck_ttd?: SortOrder
    skck_createdBy?: SortOrder
    skck_created?: SortOrder
    skck_updated?: SortOrder
    skck_deleted?: SortOrder
  }

  export type skckSumOrderByAggregateInput = {
    skck_id?: SortOrder
    skck_jk?: SortOrder
    skck_agama?: SortOrder
    skck_statusKawin?: SortOrder
    skck_pendidikan_terakhir?: SortOrder
    skck_ttd?: SortOrder
    skck_createdBy?: SortOrder
  }

  export type jabatanCreateNestedOneWithoutUsersInput = {
    create?: XOR<jabatanCreateWithoutUsersInput, jabatanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: jabatanCreateOrConnectWithoutUsersInput
    connect?: jabatanWhereUniqueInput
  }

  export type sktmCreateNestedManyWithoutTtd_sktmInput = {
    create?: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput> | sktmCreateWithoutTtd_sktmInput[] | sktmUncheckedCreateWithoutTtd_sktmInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutTtd_sktmInput | sktmCreateOrConnectWithoutTtd_sktmInput[]
    createMany?: sktmCreateManyTtd_sktmInputEnvelope
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
  }

  export type sktmCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput> | sktmCreateWithoutCreated_byInput[] | sktmUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutCreated_byInput | sktmCreateOrConnectWithoutCreated_byInput[]
    createMany?: sktmCreateManyCreated_byInputEnvelope
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
  }

  export type belumNikahCreateNestedManyWithoutTtd_nikahInput = {
    create?: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput> | belumNikahCreateWithoutTtd_nikahInput[] | belumNikahUncheckedCreateWithoutTtd_nikahInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutTtd_nikahInput | belumNikahCreateOrConnectWithoutTtd_nikahInput[]
    createMany?: belumNikahCreateManyTtd_nikahInputEnvelope
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
  }

  export type belumNikahCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput> | belumNikahCreateWithoutCreated_byInput[] | belumNikahUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutCreated_byInput | belumNikahCreateOrConnectWithoutCreated_byInput[]
    createMany?: belumNikahCreateManyCreated_byInputEnvelope
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
  }

  export type skckCreateNestedManyWithoutTtd_skckInput = {
    create?: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput> | skckCreateWithoutTtd_skckInput[] | skckUncheckedCreateWithoutTtd_skckInput[]
    connectOrCreate?: skckCreateOrConnectWithoutTtd_skckInput | skckCreateOrConnectWithoutTtd_skckInput[]
    createMany?: skckCreateManyTtd_skckInputEnvelope
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
  }

  export type skckCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput> | skckCreateWithoutCreatedByInput[] | skckUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: skckCreateOrConnectWithoutCreatedByInput | skckCreateOrConnectWithoutCreatedByInput[]
    createMany?: skckCreateManyCreatedByInputEnvelope
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
  }

  export type sktmUncheckedCreateNestedManyWithoutTtd_sktmInput = {
    create?: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput> | sktmCreateWithoutTtd_sktmInput[] | sktmUncheckedCreateWithoutTtd_sktmInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutTtd_sktmInput | sktmCreateOrConnectWithoutTtd_sktmInput[]
    createMany?: sktmCreateManyTtd_sktmInputEnvelope
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
  }

  export type sktmUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput> | sktmCreateWithoutCreated_byInput[] | sktmUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutCreated_byInput | sktmCreateOrConnectWithoutCreated_byInput[]
    createMany?: sktmCreateManyCreated_byInputEnvelope
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
  }

  export type belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput = {
    create?: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput> | belumNikahCreateWithoutTtd_nikahInput[] | belumNikahUncheckedCreateWithoutTtd_nikahInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutTtd_nikahInput | belumNikahCreateOrConnectWithoutTtd_nikahInput[]
    createMany?: belumNikahCreateManyTtd_nikahInputEnvelope
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
  }

  export type belumNikahUncheckedCreateNestedManyWithoutCreated_byInput = {
    create?: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput> | belumNikahCreateWithoutCreated_byInput[] | belumNikahUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutCreated_byInput | belumNikahCreateOrConnectWithoutCreated_byInput[]
    createMany?: belumNikahCreateManyCreated_byInputEnvelope
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
  }

  export type skckUncheckedCreateNestedManyWithoutTtd_skckInput = {
    create?: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput> | skckCreateWithoutTtd_skckInput[] | skckUncheckedCreateWithoutTtd_skckInput[]
    connectOrCreate?: skckCreateOrConnectWithoutTtd_skckInput | skckCreateOrConnectWithoutTtd_skckInput[]
    createMany?: skckCreateManyTtd_skckInputEnvelope
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
  }

  export type skckUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput> | skckCreateWithoutCreatedByInput[] | skckUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: skckCreateOrConnectWithoutCreatedByInput | skckCreateOrConnectWithoutCreatedByInput[]
    createMany?: skckCreateManyCreatedByInputEnvelope
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type jabatanUpdateOneWithoutUsersNestedInput = {
    create?: XOR<jabatanCreateWithoutUsersInput, jabatanUncheckedCreateWithoutUsersInput>
    connectOrCreate?: jabatanCreateOrConnectWithoutUsersInput
    upsert?: jabatanUpsertWithoutUsersInput
    disconnect?: jabatanWhereInput | boolean
    delete?: jabatanWhereInput | boolean
    connect?: jabatanWhereUniqueInput
    update?: XOR<XOR<jabatanUpdateToOneWithWhereWithoutUsersInput, jabatanUpdateWithoutUsersInput>, jabatanUncheckedUpdateWithoutUsersInput>
  }

  export type sktmUpdateManyWithoutTtd_sktmNestedInput = {
    create?: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput> | sktmCreateWithoutTtd_sktmInput[] | sktmUncheckedCreateWithoutTtd_sktmInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutTtd_sktmInput | sktmCreateOrConnectWithoutTtd_sktmInput[]
    upsert?: sktmUpsertWithWhereUniqueWithoutTtd_sktmInput | sktmUpsertWithWhereUniqueWithoutTtd_sktmInput[]
    createMany?: sktmCreateManyTtd_sktmInputEnvelope
    set?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    disconnect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    delete?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    update?: sktmUpdateWithWhereUniqueWithoutTtd_sktmInput | sktmUpdateWithWhereUniqueWithoutTtd_sktmInput[]
    updateMany?: sktmUpdateManyWithWhereWithoutTtd_sktmInput | sktmUpdateManyWithWhereWithoutTtd_sktmInput[]
    deleteMany?: sktmScalarWhereInput | sktmScalarWhereInput[]
  }

  export type sktmUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput> | sktmCreateWithoutCreated_byInput[] | sktmUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutCreated_byInput | sktmCreateOrConnectWithoutCreated_byInput[]
    upsert?: sktmUpsertWithWhereUniqueWithoutCreated_byInput | sktmUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: sktmCreateManyCreated_byInputEnvelope
    set?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    disconnect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    delete?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    update?: sktmUpdateWithWhereUniqueWithoutCreated_byInput | sktmUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: sktmUpdateManyWithWhereWithoutCreated_byInput | sktmUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: sktmScalarWhereInput | sktmScalarWhereInput[]
  }

  export type belumNikahUpdateManyWithoutTtd_nikahNestedInput = {
    create?: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput> | belumNikahCreateWithoutTtd_nikahInput[] | belumNikahUncheckedCreateWithoutTtd_nikahInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutTtd_nikahInput | belumNikahCreateOrConnectWithoutTtd_nikahInput[]
    upsert?: belumNikahUpsertWithWhereUniqueWithoutTtd_nikahInput | belumNikahUpsertWithWhereUniqueWithoutTtd_nikahInput[]
    createMany?: belumNikahCreateManyTtd_nikahInputEnvelope
    set?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    disconnect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    delete?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    update?: belumNikahUpdateWithWhereUniqueWithoutTtd_nikahInput | belumNikahUpdateWithWhereUniqueWithoutTtd_nikahInput[]
    updateMany?: belumNikahUpdateManyWithWhereWithoutTtd_nikahInput | belumNikahUpdateManyWithWhereWithoutTtd_nikahInput[]
    deleteMany?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
  }

  export type belumNikahUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput> | belumNikahCreateWithoutCreated_byInput[] | belumNikahUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutCreated_byInput | belumNikahCreateOrConnectWithoutCreated_byInput[]
    upsert?: belumNikahUpsertWithWhereUniqueWithoutCreated_byInput | belumNikahUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: belumNikahCreateManyCreated_byInputEnvelope
    set?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    disconnect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    delete?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    update?: belumNikahUpdateWithWhereUniqueWithoutCreated_byInput | belumNikahUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: belumNikahUpdateManyWithWhereWithoutCreated_byInput | belumNikahUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
  }

  export type skckUpdateManyWithoutTtd_skckNestedInput = {
    create?: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput> | skckCreateWithoutTtd_skckInput[] | skckUncheckedCreateWithoutTtd_skckInput[]
    connectOrCreate?: skckCreateOrConnectWithoutTtd_skckInput | skckCreateOrConnectWithoutTtd_skckInput[]
    upsert?: skckUpsertWithWhereUniqueWithoutTtd_skckInput | skckUpsertWithWhereUniqueWithoutTtd_skckInput[]
    createMany?: skckCreateManyTtd_skckInputEnvelope
    set?: skckWhereUniqueInput | skckWhereUniqueInput[]
    disconnect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    delete?: skckWhereUniqueInput | skckWhereUniqueInput[]
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    update?: skckUpdateWithWhereUniqueWithoutTtd_skckInput | skckUpdateWithWhereUniqueWithoutTtd_skckInput[]
    updateMany?: skckUpdateManyWithWhereWithoutTtd_skckInput | skckUpdateManyWithWhereWithoutTtd_skckInput[]
    deleteMany?: skckScalarWhereInput | skckScalarWhereInput[]
  }

  export type skckUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput> | skckCreateWithoutCreatedByInput[] | skckUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: skckCreateOrConnectWithoutCreatedByInput | skckCreateOrConnectWithoutCreatedByInput[]
    upsert?: skckUpsertWithWhereUniqueWithoutCreatedByInput | skckUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: skckCreateManyCreatedByInputEnvelope
    set?: skckWhereUniqueInput | skckWhereUniqueInput[]
    disconnect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    delete?: skckWhereUniqueInput | skckWhereUniqueInput[]
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    update?: skckUpdateWithWhereUniqueWithoutCreatedByInput | skckUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: skckUpdateManyWithWhereWithoutCreatedByInput | skckUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: skckScalarWhereInput | skckScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput = {
    create?: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput> | sktmCreateWithoutTtd_sktmInput[] | sktmUncheckedCreateWithoutTtd_sktmInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutTtd_sktmInput | sktmCreateOrConnectWithoutTtd_sktmInput[]
    upsert?: sktmUpsertWithWhereUniqueWithoutTtd_sktmInput | sktmUpsertWithWhereUniqueWithoutTtd_sktmInput[]
    createMany?: sktmCreateManyTtd_sktmInputEnvelope
    set?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    disconnect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    delete?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    update?: sktmUpdateWithWhereUniqueWithoutTtd_sktmInput | sktmUpdateWithWhereUniqueWithoutTtd_sktmInput[]
    updateMany?: sktmUpdateManyWithWhereWithoutTtd_sktmInput | sktmUpdateManyWithWhereWithoutTtd_sktmInput[]
    deleteMany?: sktmScalarWhereInput | sktmScalarWhereInput[]
  }

  export type sktmUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput> | sktmCreateWithoutCreated_byInput[] | sktmUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: sktmCreateOrConnectWithoutCreated_byInput | sktmCreateOrConnectWithoutCreated_byInput[]
    upsert?: sktmUpsertWithWhereUniqueWithoutCreated_byInput | sktmUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: sktmCreateManyCreated_byInputEnvelope
    set?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    disconnect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    delete?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    connect?: sktmWhereUniqueInput | sktmWhereUniqueInput[]
    update?: sktmUpdateWithWhereUniqueWithoutCreated_byInput | sktmUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: sktmUpdateManyWithWhereWithoutCreated_byInput | sktmUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: sktmScalarWhereInput | sktmScalarWhereInput[]
  }

  export type belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput = {
    create?: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput> | belumNikahCreateWithoutTtd_nikahInput[] | belumNikahUncheckedCreateWithoutTtd_nikahInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutTtd_nikahInput | belumNikahCreateOrConnectWithoutTtd_nikahInput[]
    upsert?: belumNikahUpsertWithWhereUniqueWithoutTtd_nikahInput | belumNikahUpsertWithWhereUniqueWithoutTtd_nikahInput[]
    createMany?: belumNikahCreateManyTtd_nikahInputEnvelope
    set?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    disconnect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    delete?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    update?: belumNikahUpdateWithWhereUniqueWithoutTtd_nikahInput | belumNikahUpdateWithWhereUniqueWithoutTtd_nikahInput[]
    updateMany?: belumNikahUpdateManyWithWhereWithoutTtd_nikahInput | belumNikahUpdateManyWithWhereWithoutTtd_nikahInput[]
    deleteMany?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
  }

  export type belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput = {
    create?: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput> | belumNikahCreateWithoutCreated_byInput[] | belumNikahUncheckedCreateWithoutCreated_byInput[]
    connectOrCreate?: belumNikahCreateOrConnectWithoutCreated_byInput | belumNikahCreateOrConnectWithoutCreated_byInput[]
    upsert?: belumNikahUpsertWithWhereUniqueWithoutCreated_byInput | belumNikahUpsertWithWhereUniqueWithoutCreated_byInput[]
    createMany?: belumNikahCreateManyCreated_byInputEnvelope
    set?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    disconnect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    delete?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    connect?: belumNikahWhereUniqueInput | belumNikahWhereUniqueInput[]
    update?: belumNikahUpdateWithWhereUniqueWithoutCreated_byInput | belumNikahUpdateWithWhereUniqueWithoutCreated_byInput[]
    updateMany?: belumNikahUpdateManyWithWhereWithoutCreated_byInput | belumNikahUpdateManyWithWhereWithoutCreated_byInput[]
    deleteMany?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
  }

  export type skckUncheckedUpdateManyWithoutTtd_skckNestedInput = {
    create?: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput> | skckCreateWithoutTtd_skckInput[] | skckUncheckedCreateWithoutTtd_skckInput[]
    connectOrCreate?: skckCreateOrConnectWithoutTtd_skckInput | skckCreateOrConnectWithoutTtd_skckInput[]
    upsert?: skckUpsertWithWhereUniqueWithoutTtd_skckInput | skckUpsertWithWhereUniqueWithoutTtd_skckInput[]
    createMany?: skckCreateManyTtd_skckInputEnvelope
    set?: skckWhereUniqueInput | skckWhereUniqueInput[]
    disconnect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    delete?: skckWhereUniqueInput | skckWhereUniqueInput[]
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    update?: skckUpdateWithWhereUniqueWithoutTtd_skckInput | skckUpdateWithWhereUniqueWithoutTtd_skckInput[]
    updateMany?: skckUpdateManyWithWhereWithoutTtd_skckInput | skckUpdateManyWithWhereWithoutTtd_skckInput[]
    deleteMany?: skckScalarWhereInput | skckScalarWhereInput[]
  }

  export type skckUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput> | skckCreateWithoutCreatedByInput[] | skckUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: skckCreateOrConnectWithoutCreatedByInput | skckCreateOrConnectWithoutCreatedByInput[]
    upsert?: skckUpsertWithWhereUniqueWithoutCreatedByInput | skckUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: skckCreateManyCreatedByInputEnvelope
    set?: skckWhereUniqueInput | skckWhereUniqueInput[]
    disconnect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    delete?: skckWhereUniqueInput | skckWhereUniqueInput[]
    connect?: skckWhereUniqueInput | skckWhereUniqueInput[]
    update?: skckUpdateWithWhereUniqueWithoutCreatedByInput | skckUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: skckUpdateManyWithWhereWithoutCreatedByInput | skckUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: skckScalarWhereInput | skckScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutJabatanInput = {
    create?: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput> | usersCreateWithoutJabatanInput[] | usersUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJabatanInput | usersCreateOrConnectWithoutJabatanInput[]
    createMany?: usersCreateManyJabatanInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutJabatanInput = {
    create?: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput> | usersCreateWithoutJabatanInput[] | usersUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJabatanInput | usersCreateOrConnectWithoutJabatanInput[]
    createMany?: usersCreateManyJabatanInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput> | usersCreateWithoutJabatanInput[] | usersUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJabatanInput | usersCreateOrConnectWithoutJabatanInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJabatanInput | usersUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: usersCreateManyJabatanInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJabatanInput | usersUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJabatanInput | usersUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutJabatanNestedInput = {
    create?: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput> | usersCreateWithoutJabatanInput[] | usersUncheckedCreateWithoutJabatanInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJabatanInput | usersCreateOrConnectWithoutJabatanInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJabatanInput | usersUpsertWithWhereUniqueWithoutJabatanInput[]
    createMany?: usersCreateManyJabatanInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJabatanInput | usersUpdateWithWhereUniqueWithoutJabatanInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJabatanInput | usersUpdateManyWithWhereWithoutJabatanInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSktmInput = {
    create?: XOR<usersCreateWithoutSktmInput, usersUncheckedCreateWithoutSktmInput>
    connectOrCreate?: usersCreateOrConnectWithoutSktmInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSktm_createdByInput = {
    create?: XOR<usersCreateWithoutSktm_createdByInput, usersUncheckedCreateWithoutSktm_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutSktm_createdByInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutSktmNestedInput = {
    create?: XOR<usersCreateWithoutSktmInput, usersUncheckedCreateWithoutSktmInput>
    connectOrCreate?: usersCreateOrConnectWithoutSktmInput
    upsert?: usersUpsertWithoutSktmInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSktmInput, usersUpdateWithoutSktmInput>, usersUncheckedUpdateWithoutSktmInput>
  }

  export type usersUpdateOneWithoutSktm_createdByNestedInput = {
    create?: XOR<usersCreateWithoutSktm_createdByInput, usersUncheckedCreateWithoutSktm_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutSktm_createdByInput
    upsert?: usersUpsertWithoutSktm_createdByInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSktm_createdByInput, usersUpdateWithoutSktm_createdByInput>, usersUncheckedUpdateWithoutSktm_createdByInput>
  }

  export type usersCreateNestedOneWithoutBelumNikahInput = {
    create?: XOR<usersCreateWithoutBelumNikahInput, usersUncheckedCreateWithoutBelumNikahInput>
    connectOrCreate?: usersCreateOrConnectWithoutBelumNikahInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNikah_createdByInput = {
    create?: XOR<usersCreateWithoutNikah_createdByInput, usersUncheckedCreateWithoutNikah_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutNikah_createdByInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutBelumNikahNestedInput = {
    create?: XOR<usersCreateWithoutBelumNikahInput, usersUncheckedCreateWithoutBelumNikahInput>
    connectOrCreate?: usersCreateOrConnectWithoutBelumNikahInput
    upsert?: usersUpsertWithoutBelumNikahInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBelumNikahInput, usersUpdateWithoutBelumNikahInput>, usersUncheckedUpdateWithoutBelumNikahInput>
  }

  export type usersUpdateOneWithoutNikah_createdByNestedInput = {
    create?: XOR<usersCreateWithoutNikah_createdByInput, usersUncheckedCreateWithoutNikah_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutNikah_createdByInput
    upsert?: usersUpsertWithoutNikah_createdByInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNikah_createdByInput, usersUpdateWithoutNikah_createdByInput>, usersUncheckedUpdateWithoutNikah_createdByInput>
  }

  export type usersCreateNestedOneWithoutSkckInput = {
    create?: XOR<usersCreateWithoutSkckInput, usersUncheckedCreateWithoutSkckInput>
    connectOrCreate?: usersCreateOrConnectWithoutSkckInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSkck_createdByInput = {
    create?: XOR<usersCreateWithoutSkck_createdByInput, usersUncheckedCreateWithoutSkck_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutSkck_createdByInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutSkckNestedInput = {
    create?: XOR<usersCreateWithoutSkckInput, usersUncheckedCreateWithoutSkckInput>
    connectOrCreate?: usersCreateOrConnectWithoutSkckInput
    upsert?: usersUpsertWithoutSkckInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSkckInput, usersUpdateWithoutSkckInput>, usersUncheckedUpdateWithoutSkckInput>
  }

  export type usersUpdateOneWithoutSkck_createdByNestedInput = {
    create?: XOR<usersCreateWithoutSkck_createdByInput, usersUncheckedCreateWithoutSkck_createdByInput>
    connectOrCreate?: usersCreateOrConnectWithoutSkck_createdByInput
    upsert?: usersUpsertWithoutSkck_createdByInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSkck_createdByInput, usersUpdateWithoutSkck_createdByInput>, usersUncheckedUpdateWithoutSkck_createdByInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type jabatanCreateWithoutUsersInput = {
    jabatan_nama: string
    jabatan_created?: Date | string
    jabatan_updated?: Date | string
    jabatan_deleted?: Date | string | null
  }

  export type jabatanUncheckedCreateWithoutUsersInput = {
    jabatan_id?: number
    jabatan_nama: string
    jabatan_created?: Date | string
    jabatan_updated?: Date | string
    jabatan_deleted?: Date | string | null
  }

  export type jabatanCreateOrConnectWithoutUsersInput = {
    where: jabatanWhereUniqueInput
    create: XOR<jabatanCreateWithoutUsersInput, jabatanUncheckedCreateWithoutUsersInput>
  }

  export type sktmCreateWithoutTtd_sktmInput = {
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
    created_by?: usersCreateNestedOneWithoutSktm_createdByInput
  }

  export type sktmUncheckedCreateWithoutTtd_sktmInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_createdBy?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type sktmCreateOrConnectWithoutTtd_sktmInput = {
    where: sktmWhereUniqueInput
    create: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput>
  }

  export type sktmCreateManyTtd_sktmInputEnvelope = {
    data: sktmCreateManyTtd_sktmInput | sktmCreateManyTtd_sktmInput[]
    skipDuplicates?: boolean
  }

  export type sktmCreateWithoutCreated_byInput = {
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
    ttd_sktm?: usersCreateNestedOneWithoutSktmInput
  }

  export type sktmUncheckedCreateWithoutCreated_byInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_ttd?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type sktmCreateOrConnectWithoutCreated_byInput = {
    where: sktmWhereUniqueInput
    create: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput>
  }

  export type sktmCreateManyCreated_byInputEnvelope = {
    data: sktmCreateManyCreated_byInput | sktmCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type belumNikahCreateWithoutTtd_nikahInput = {
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
    created_by?: usersCreateNestedOneWithoutNikah_createdByInput
  }

  export type belumNikahUncheckedCreateWithoutTtd_nikahInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_createdBy?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type belumNikahCreateOrConnectWithoutTtd_nikahInput = {
    where: belumNikahWhereUniqueInput
    create: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput>
  }

  export type belumNikahCreateManyTtd_nikahInputEnvelope = {
    data: belumNikahCreateManyTtd_nikahInput | belumNikahCreateManyTtd_nikahInput[]
    skipDuplicates?: boolean
  }

  export type belumNikahCreateWithoutCreated_byInput = {
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
    ttd_nikah?: usersCreateNestedOneWithoutBelumNikahInput
  }

  export type belumNikahUncheckedCreateWithoutCreated_byInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_ttd?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type belumNikahCreateOrConnectWithoutCreated_byInput = {
    where: belumNikahWhereUniqueInput
    create: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput>
  }

  export type belumNikahCreateManyCreated_byInputEnvelope = {
    data: belumNikahCreateManyCreated_byInput | belumNikahCreateManyCreated_byInput[]
    skipDuplicates?: boolean
  }

  export type skckCreateWithoutTtd_skckInput = {
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
    createdBy?: usersCreateNestedOneWithoutSkck_createdByInput
  }

  export type skckUncheckedCreateWithoutTtd_skckInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_createdBy?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type skckCreateOrConnectWithoutTtd_skckInput = {
    where: skckWhereUniqueInput
    create: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput>
  }

  export type skckCreateManyTtd_skckInputEnvelope = {
    data: skckCreateManyTtd_skckInput | skckCreateManyTtd_skckInput[]
    skipDuplicates?: boolean
  }

  export type skckCreateWithoutCreatedByInput = {
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
    ttd_skck?: usersCreateNestedOneWithoutSkckInput
  }

  export type skckUncheckedCreateWithoutCreatedByInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_ttd?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type skckCreateOrConnectWithoutCreatedByInput = {
    where: skckWhereUniqueInput
    create: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput>
  }

  export type skckCreateManyCreatedByInputEnvelope = {
    data: skckCreateManyCreatedByInput | skckCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type jabatanUpsertWithoutUsersInput = {
    update: XOR<jabatanUpdateWithoutUsersInput, jabatanUncheckedUpdateWithoutUsersInput>
    create: XOR<jabatanCreateWithoutUsersInput, jabatanUncheckedCreateWithoutUsersInput>
    where?: jabatanWhereInput
  }

  export type jabatanUpdateToOneWithWhereWithoutUsersInput = {
    where?: jabatanWhereInput
    data: XOR<jabatanUpdateWithoutUsersInput, jabatanUncheckedUpdateWithoutUsersInput>
  }

  export type jabatanUpdateWithoutUsersInput = {
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type jabatanUncheckedUpdateWithoutUsersInput = {
    jabatan_id?: IntFieldUpdateOperationsInput | number
    jabatan_nama?: StringFieldUpdateOperationsInput | string
    jabatan_created?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    jabatan_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmUpsertWithWhereUniqueWithoutTtd_sktmInput = {
    where: sktmWhereUniqueInput
    update: XOR<sktmUpdateWithoutTtd_sktmInput, sktmUncheckedUpdateWithoutTtd_sktmInput>
    create: XOR<sktmCreateWithoutTtd_sktmInput, sktmUncheckedCreateWithoutTtd_sktmInput>
  }

  export type sktmUpdateWithWhereUniqueWithoutTtd_sktmInput = {
    where: sktmWhereUniqueInput
    data: XOR<sktmUpdateWithoutTtd_sktmInput, sktmUncheckedUpdateWithoutTtd_sktmInput>
  }

  export type sktmUpdateManyWithWhereWithoutTtd_sktmInput = {
    where: sktmScalarWhereInput
    data: XOR<sktmUpdateManyMutationInput, sktmUncheckedUpdateManyWithoutTtd_sktmInput>
  }

  export type sktmScalarWhereInput = {
    AND?: sktmScalarWhereInput | sktmScalarWhereInput[]
    OR?: sktmScalarWhereInput[]
    NOT?: sktmScalarWhereInput | sktmScalarWhereInput[]
    sktm_id?: IntFilter<"sktm"> | number
    sktm_noSurat?: StringNullableFilter<"sktm"> | string | null
    sktm_nama?: StringFilter<"sktm"> | string
    sktm_tgl_lahir?: DateTimeFilter<"sktm"> | Date | string
    sktm_tempat_lahir?: StringFilter<"sktm"> | string
    sktm_suku?: StringFilter<"sktm"> | string
    sktm_agama?: IntFilter<"sktm"> | number
    sktm_jk?: IntFilter<"sktm"> | number
    sktm_noKtp?: StringFilter<"sktm"> | string
    sktm_pekerjaan?: StringFilter<"sktm"> | string
    sktm_alamat?: StringFilter<"sktm"> | string
    sktm_dusun?: StringFilter<"sktm"> | string
    sktm_kepentingan?: StringFilter<"sktm"> | string
    sktm_ttd?: IntNullableFilter<"sktm"> | number | null
    sktm_createdBy?: IntNullableFilter<"sktm"> | number | null
    sktm_created?: DateTimeFilter<"sktm"> | Date | string
    sktm_updated?: DateTimeFilter<"sktm"> | Date | string
    sktm_deleted?: DateTimeNullableFilter<"sktm"> | Date | string | null
  }

  export type sktmUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: sktmWhereUniqueInput
    update: XOR<sktmUpdateWithoutCreated_byInput, sktmUncheckedUpdateWithoutCreated_byInput>
    create: XOR<sktmCreateWithoutCreated_byInput, sktmUncheckedCreateWithoutCreated_byInput>
  }

  export type sktmUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: sktmWhereUniqueInput
    data: XOR<sktmUpdateWithoutCreated_byInput, sktmUncheckedUpdateWithoutCreated_byInput>
  }

  export type sktmUpdateManyWithWhereWithoutCreated_byInput = {
    where: sktmScalarWhereInput
    data: XOR<sktmUpdateManyMutationInput, sktmUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type belumNikahUpsertWithWhereUniqueWithoutTtd_nikahInput = {
    where: belumNikahWhereUniqueInput
    update: XOR<belumNikahUpdateWithoutTtd_nikahInput, belumNikahUncheckedUpdateWithoutTtd_nikahInput>
    create: XOR<belumNikahCreateWithoutTtd_nikahInput, belumNikahUncheckedCreateWithoutTtd_nikahInput>
  }

  export type belumNikahUpdateWithWhereUniqueWithoutTtd_nikahInput = {
    where: belumNikahWhereUniqueInput
    data: XOR<belumNikahUpdateWithoutTtd_nikahInput, belumNikahUncheckedUpdateWithoutTtd_nikahInput>
  }

  export type belumNikahUpdateManyWithWhereWithoutTtd_nikahInput = {
    where: belumNikahScalarWhereInput
    data: XOR<belumNikahUpdateManyMutationInput, belumNikahUncheckedUpdateManyWithoutTtd_nikahInput>
  }

  export type belumNikahScalarWhereInput = {
    AND?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
    OR?: belumNikahScalarWhereInput[]
    NOT?: belumNikahScalarWhereInput | belumNikahScalarWhereInput[]
    nikah_id?: IntFilter<"belumNikah"> | number
    nikah_nomor?: StringNullableFilter<"belumNikah"> | string | null
    nikah_nama?: StringFilter<"belumNikah"> | string
    nikah_jk?: IntFilter<"belumNikah"> | number
    nikah_tempat_lahir?: StringFilter<"belumNikah"> | string
    nikah_tgl_lahir?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_suku?: StringFilter<"belumNikah"> | string
    nikah_agama?: IntFilter<"belumNikah"> | number
    nikah_nik?: StringFilter<"belumNikah"> | string
    nikah_alamat?: StringFilter<"belumNikah"> | string
    nikah_kepentingan?: StringFilter<"belumNikah"> | string
    nikah_ttd?: IntNullableFilter<"belumNikah"> | number | null
    nikah_createdBy?: IntNullableFilter<"belumNikah"> | number | null
    nikah_created?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_updated?: DateTimeFilter<"belumNikah"> | Date | string
    nikah_deleted?: DateTimeNullableFilter<"belumNikah"> | Date | string | null
  }

  export type belumNikahUpsertWithWhereUniqueWithoutCreated_byInput = {
    where: belumNikahWhereUniqueInput
    update: XOR<belumNikahUpdateWithoutCreated_byInput, belumNikahUncheckedUpdateWithoutCreated_byInput>
    create: XOR<belumNikahCreateWithoutCreated_byInput, belumNikahUncheckedCreateWithoutCreated_byInput>
  }

  export type belumNikahUpdateWithWhereUniqueWithoutCreated_byInput = {
    where: belumNikahWhereUniqueInput
    data: XOR<belumNikahUpdateWithoutCreated_byInput, belumNikahUncheckedUpdateWithoutCreated_byInput>
  }

  export type belumNikahUpdateManyWithWhereWithoutCreated_byInput = {
    where: belumNikahScalarWhereInput
    data: XOR<belumNikahUpdateManyMutationInput, belumNikahUncheckedUpdateManyWithoutCreated_byInput>
  }

  export type skckUpsertWithWhereUniqueWithoutTtd_skckInput = {
    where: skckWhereUniqueInput
    update: XOR<skckUpdateWithoutTtd_skckInput, skckUncheckedUpdateWithoutTtd_skckInput>
    create: XOR<skckCreateWithoutTtd_skckInput, skckUncheckedCreateWithoutTtd_skckInput>
  }

  export type skckUpdateWithWhereUniqueWithoutTtd_skckInput = {
    where: skckWhereUniqueInput
    data: XOR<skckUpdateWithoutTtd_skckInput, skckUncheckedUpdateWithoutTtd_skckInput>
  }

  export type skckUpdateManyWithWhereWithoutTtd_skckInput = {
    where: skckScalarWhereInput
    data: XOR<skckUpdateManyMutationInput, skckUncheckedUpdateManyWithoutTtd_skckInput>
  }

  export type skckScalarWhereInput = {
    AND?: skckScalarWhereInput | skckScalarWhereInput[]
    OR?: skckScalarWhereInput[]
    NOT?: skckScalarWhereInput | skckScalarWhereInput[]
    skck_id?: IntFilter<"skck"> | number
    skck_nomor?: StringNullableFilter<"skck"> | string | null
    skck_nama?: StringFilter<"skck"> | string
    skck_tempat_lahir?: StringFilter<"skck"> | string
    skck_tanggal_lahir?: DateTimeFilter<"skck"> | Date | string
    skck_jk?: IntFilter<"skck"> | number
    skck_agama?: IntFilter<"skck"> | number
    skck_statusKawin?: IntFilter<"skck"> | number
    skck_pekerjaan?: StringFilter<"skck"> | string
    skck_suku?: StringFilter<"skck"> | string
    skck_nik?: StringFilter<"skck"> | string
    skck_alamat?: StringFilter<"skck"> | string
    skck_pendidikan_terakhir?: IntFilter<"skck"> | number
    skck_kepentingan?: StringFilter<"skck"> | string
    skck_ttd?: IntNullableFilter<"skck"> | number | null
    skck_createdBy?: IntNullableFilter<"skck"> | number | null
    skck_created?: DateTimeFilter<"skck"> | Date | string
    skck_updated?: DateTimeFilter<"skck"> | Date | string
    skck_deleted?: DateTimeNullableFilter<"skck"> | Date | string | null
  }

  export type skckUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: skckWhereUniqueInput
    update: XOR<skckUpdateWithoutCreatedByInput, skckUncheckedUpdateWithoutCreatedByInput>
    create: XOR<skckCreateWithoutCreatedByInput, skckUncheckedCreateWithoutCreatedByInput>
  }

  export type skckUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: skckWhereUniqueInput
    data: XOR<skckUpdateWithoutCreatedByInput, skckUncheckedUpdateWithoutCreatedByInput>
  }

  export type skckUpdateManyWithWhereWithoutCreatedByInput = {
    where: skckScalarWhereInput
    data: XOR<skckUpdateManyMutationInput, skckUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type usersCreateWithoutJabatanInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutJabatanInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutJabatanInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput>
  }

  export type usersCreateManyJabatanInputEnvelope = {
    data: usersCreateManyJabatanInput | usersCreateManyJabatanInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutJabatanInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutJabatanInput, usersUncheckedUpdateWithoutJabatanInput>
    create: XOR<usersCreateWithoutJabatanInput, usersUncheckedCreateWithoutJabatanInput>
  }

  export type usersUpdateWithWhereUniqueWithoutJabatanInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutJabatanInput, usersUncheckedUpdateWithoutJabatanInput>
  }

  export type usersUpdateManyWithWhereWithoutJabatanInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutJabatanInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: IntFilter<"users"> | number
    user_nama?: StringFilter<"users"> | string
    user_nip?: StringNullableFilter<"users"> | string | null
    user_email?: StringNullableFilter<"users"> | string | null
    user_hp?: StringFilter<"users"> | string
    user_image?: StringNullableFilter<"users"> | string | null
    user_alamat?: StringFilter<"users"> | string
    user_jabatan?: IntNullableFilter<"users"> | number | null
    user_name?: StringFilter<"users"> | string
    user_pass?: StringFilter<"users"> | string
    user_level?: IntFilter<"users"> | number
    user_lastip?: StringNullableFilter<"users"> | string | null
    user_lastlogin?: StringNullableFilter<"users"> | string | null
    user_created?: DateTimeFilter<"users"> | Date | string
    user_updated?: DateTimeFilter<"users"> | Date | string
    user_deleted?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersCreateWithoutSktmInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutSktmInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutSktmInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSktmInput, usersUncheckedCreateWithoutSktmInput>
  }

  export type usersCreateWithoutSktm_createdByInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutSktm_createdByInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutSktm_createdByInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSktm_createdByInput, usersUncheckedCreateWithoutSktm_createdByInput>
  }

  export type usersUpsertWithoutSktmInput = {
    update: XOR<usersUpdateWithoutSktmInput, usersUncheckedUpdateWithoutSktmInput>
    create: XOR<usersCreateWithoutSktmInput, usersUncheckedCreateWithoutSktmInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSktmInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSktmInput, usersUncheckedUpdateWithoutSktmInput>
  }

  export type usersUpdateWithoutSktmInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutSktmInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUpsertWithoutSktm_createdByInput = {
    update: XOR<usersUpdateWithoutSktm_createdByInput, usersUncheckedUpdateWithoutSktm_createdByInput>
    create: XOR<usersCreateWithoutSktm_createdByInput, usersUncheckedCreateWithoutSktm_createdByInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSktm_createdByInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSktm_createdByInput, usersUncheckedUpdateWithoutSktm_createdByInput>
  }

  export type usersUpdateWithoutSktm_createdByInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutSktm_createdByInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersCreateWithoutBelumNikahInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutBelumNikahInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutBelumNikahInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBelumNikahInput, usersUncheckedCreateWithoutBelumNikahInput>
  }

  export type usersCreateWithoutNikah_createdByInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutNikah_createdByInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutNikah_createdByInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNikah_createdByInput, usersUncheckedCreateWithoutNikah_createdByInput>
  }

  export type usersUpsertWithoutBelumNikahInput = {
    update: XOR<usersUpdateWithoutBelumNikahInput, usersUncheckedUpdateWithoutBelumNikahInput>
    create: XOR<usersCreateWithoutBelumNikahInput, usersUncheckedCreateWithoutBelumNikahInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBelumNikahInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBelumNikahInput, usersUncheckedUpdateWithoutBelumNikahInput>
  }

  export type usersUpdateWithoutBelumNikahInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutBelumNikahInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUpsertWithoutNikah_createdByInput = {
    update: XOR<usersUpdateWithoutNikah_createdByInput, usersUncheckedUpdateWithoutNikah_createdByInput>
    create: XOR<usersCreateWithoutNikah_createdByInput, usersUncheckedCreateWithoutNikah_createdByInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNikah_createdByInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNikah_createdByInput, usersUncheckedUpdateWithoutNikah_createdByInput>
  }

  export type usersUpdateWithoutNikah_createdByInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutNikah_createdByInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersCreateWithoutSkckInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck_createdBy?: skckCreateNestedManyWithoutCreatedByInput
  }

  export type usersUncheckedCreateWithoutSkckInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck_createdBy?: skckUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type usersCreateOrConnectWithoutSkckInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSkckInput, usersUncheckedCreateWithoutSkckInput>
  }

  export type usersCreateWithoutSkck_createdByInput = {
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    jabatan?: jabatanCreateNestedOneWithoutUsersInput
    sktm?: sktmCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahCreateNestedManyWithoutCreated_byInput
    skck?: skckCreateNestedManyWithoutTtd_skckInput
  }

  export type usersUncheckedCreateWithoutSkck_createdByInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_jabatan?: number | null
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
    sktm?: sktmUncheckedCreateNestedManyWithoutTtd_sktmInput
    sktm_createdBy?: sktmUncheckedCreateNestedManyWithoutCreated_byInput
    belumNikah?: belumNikahUncheckedCreateNestedManyWithoutTtd_nikahInput
    nikah_createdBy?: belumNikahUncheckedCreateNestedManyWithoutCreated_byInput
    skck?: skckUncheckedCreateNestedManyWithoutTtd_skckInput
  }

  export type usersCreateOrConnectWithoutSkck_createdByInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSkck_createdByInput, usersUncheckedCreateWithoutSkck_createdByInput>
  }

  export type usersUpsertWithoutSkckInput = {
    update: XOR<usersUpdateWithoutSkckInput, usersUncheckedUpdateWithoutSkckInput>
    create: XOR<usersCreateWithoutSkckInput, usersUncheckedCreateWithoutSkckInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSkckInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSkckInput, usersUncheckedUpdateWithoutSkckInput>
  }

  export type usersUpdateWithoutSkckInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutSkckInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUpsertWithoutSkck_createdByInput = {
    update: XOR<usersUpdateWithoutSkck_createdByInput, usersUncheckedUpdateWithoutSkck_createdByInput>
    create: XOR<usersCreateWithoutSkck_createdByInput, usersUncheckedCreateWithoutSkck_createdByInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSkck_createdByInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSkck_createdByInput, usersUncheckedUpdateWithoutSkck_createdByInput>
  }

  export type usersUpdateWithoutSkck_createdByInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jabatan?: jabatanUpdateOneWithoutUsersNestedInput
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
  }

  export type usersUncheckedUpdateWithoutSkck_createdByInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_jabatan?: NullableIntFieldUpdateOperationsInput | number | null
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
  }

  export type sktmCreateManyTtd_sktmInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_createdBy?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type sktmCreateManyCreated_byInput = {
    sktm_id?: number
    sktm_noSurat?: string | null
    sktm_nama: string
    sktm_tgl_lahir: Date | string
    sktm_tempat_lahir: string
    sktm_suku: string
    sktm_agama: number
    sktm_jk: number
    sktm_noKtp: string
    sktm_pekerjaan: string
    sktm_alamat: string
    sktm_dusun: string
    sktm_kepentingan: string
    sktm_ttd?: number | null
    sktm_created?: Date | string
    sktm_updated?: Date | string
    sktm_deleted?: Date | string | null
  }

  export type belumNikahCreateManyTtd_nikahInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_createdBy?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type belumNikahCreateManyCreated_byInput = {
    nikah_id?: number
    nikah_nomor?: string | null
    nikah_nama: string
    nikah_jk: number
    nikah_tempat_lahir: string
    nikah_tgl_lahir: Date | string
    nikah_suku: string
    nikah_agama: number
    nikah_nik: string
    nikah_alamat: string
    nikah_kepentingan: string
    nikah_ttd?: number | null
    nikah_created?: Date | string
    nikah_updated?: Date | string
    nikah_deleted?: Date | string | null
  }

  export type skckCreateManyTtd_skckInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_createdBy?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type skckCreateManyCreatedByInput = {
    skck_id?: number
    skck_nomor?: string | null
    skck_nama: string
    skck_tempat_lahir: string
    skck_tanggal_lahir: Date | string
    skck_jk: number
    skck_agama: number
    skck_statusKawin: number
    skck_pekerjaan: string
    skck_suku: string
    skck_nik: string
    skck_alamat: string
    skck_pendidikan_terakhir: number
    skck_kepentingan: string
    skck_ttd?: number | null
    skck_created?: Date | string
    skck_updated?: Date | string
    skck_deleted?: Date | string | null
  }

  export type sktmUpdateWithoutTtd_sktmInput = {
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: usersUpdateOneWithoutSktm_createdByNestedInput
  }

  export type sktmUncheckedUpdateWithoutTtd_sktmInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmUncheckedUpdateManyWithoutTtd_sktmInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmUpdateWithoutCreated_byInput = {
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_sktm?: usersUpdateOneWithoutSktmNestedInput
  }

  export type sktmUncheckedUpdateWithoutCreated_byInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sktmUncheckedUpdateManyWithoutCreated_byInput = {
    sktm_id?: IntFieldUpdateOperationsInput | number
    sktm_noSurat?: NullableStringFieldUpdateOperationsInput | string | null
    sktm_nama?: StringFieldUpdateOperationsInput | string
    sktm_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_tempat_lahir?: StringFieldUpdateOperationsInput | string
    sktm_suku?: StringFieldUpdateOperationsInput | string
    sktm_agama?: IntFieldUpdateOperationsInput | number
    sktm_jk?: IntFieldUpdateOperationsInput | number
    sktm_noKtp?: StringFieldUpdateOperationsInput | string
    sktm_pekerjaan?: StringFieldUpdateOperationsInput | string
    sktm_alamat?: StringFieldUpdateOperationsInput | string
    sktm_dusun?: StringFieldUpdateOperationsInput | string
    sktm_kepentingan?: StringFieldUpdateOperationsInput | string
    sktm_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    sktm_created?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    sktm_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahUpdateWithoutTtd_nikahInput = {
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: usersUpdateOneWithoutNikah_createdByNestedInput
  }

  export type belumNikahUncheckedUpdateWithoutTtd_nikahInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahUncheckedUpdateManyWithoutTtd_nikahInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahUpdateWithoutCreated_byInput = {
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_nikah?: usersUpdateOneWithoutBelumNikahNestedInput
  }

  export type belumNikahUncheckedUpdateWithoutCreated_byInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type belumNikahUncheckedUpdateManyWithoutCreated_byInput = {
    nikah_id?: IntFieldUpdateOperationsInput | number
    nikah_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    nikah_nama?: StringFieldUpdateOperationsInput | string
    nikah_jk?: IntFieldUpdateOperationsInput | number
    nikah_tempat_lahir?: StringFieldUpdateOperationsInput | string
    nikah_tgl_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_suku?: StringFieldUpdateOperationsInput | string
    nikah_agama?: IntFieldUpdateOperationsInput | number
    nikah_nik?: StringFieldUpdateOperationsInput | string
    nikah_alamat?: StringFieldUpdateOperationsInput | string
    nikah_kepentingan?: StringFieldUpdateOperationsInput | string
    nikah_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    nikah_created?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    nikah_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckUpdateWithoutTtd_skckInput = {
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: usersUpdateOneWithoutSkck_createdByNestedInput
  }

  export type skckUncheckedUpdateWithoutTtd_skckInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckUncheckedUpdateManyWithoutTtd_skckInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckUpdateWithoutCreatedByInput = {
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ttd_skck?: usersUpdateOneWithoutSkckNestedInput
  }

  export type skckUncheckedUpdateWithoutCreatedByInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type skckUncheckedUpdateManyWithoutCreatedByInput = {
    skck_id?: IntFieldUpdateOperationsInput | number
    skck_nomor?: NullableStringFieldUpdateOperationsInput | string | null
    skck_nama?: StringFieldUpdateOperationsInput | string
    skck_tempat_lahir?: StringFieldUpdateOperationsInput | string
    skck_tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_jk?: IntFieldUpdateOperationsInput | number
    skck_agama?: IntFieldUpdateOperationsInput | number
    skck_statusKawin?: IntFieldUpdateOperationsInput | number
    skck_pekerjaan?: StringFieldUpdateOperationsInput | string
    skck_suku?: StringFieldUpdateOperationsInput | string
    skck_nik?: StringFieldUpdateOperationsInput | string
    skck_alamat?: StringFieldUpdateOperationsInput | string
    skck_pendidikan_terakhir?: IntFieldUpdateOperationsInput | number
    skck_kepentingan?: StringFieldUpdateOperationsInput | string
    skck_ttd?: NullableIntFieldUpdateOperationsInput | number | null
    skck_created?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    skck_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyJabatanInput = {
    user_id?: number
    user_nama: string
    user_nip?: string | null
    user_email?: string | null
    user_hp: string
    user_image?: string | null
    user_alamat: string
    user_name: string
    user_pass: string
    user_level: number
    user_lastip?: string | null
    user_lastlogin?: string | null
    user_created?: Date | string
    user_updated?: Date | string
    user_deleted?: Date | string | null
  }

  export type usersUpdateWithoutJabatanInput = {
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUpdateManyWithoutCreated_byNestedInput
    skck?: skckUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateWithoutJabatanInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sktm?: sktmUncheckedUpdateManyWithoutTtd_sktmNestedInput
    sktm_createdBy?: sktmUncheckedUpdateManyWithoutCreated_byNestedInput
    belumNikah?: belumNikahUncheckedUpdateManyWithoutTtd_nikahNestedInput
    nikah_createdBy?: belumNikahUncheckedUpdateManyWithoutCreated_byNestedInput
    skck?: skckUncheckedUpdateManyWithoutTtd_skckNestedInput
    skck_createdBy?: skckUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type usersUncheckedUpdateManyWithoutJabatanInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_nama?: StringFieldUpdateOperationsInput | string
    user_nip?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    user_hp?: StringFieldUpdateOperationsInput | string
    user_image?: NullableStringFieldUpdateOperationsInput | string | null
    user_alamat?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    user_pass?: StringFieldUpdateOperationsInput | string
    user_level?: IntFieldUpdateOperationsInput | number
    user_lastip?: NullableStringFieldUpdateOperationsInput | string | null
    user_lastlogin?: NullableStringFieldUpdateOperationsInput | string | null
    user_created?: DateTimeFieldUpdateOperationsInput | Date | string
    user_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user_deleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JabatanCountOutputTypeDefaultArgs instead
     */
    export type JabatanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JabatanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use jabatanDefaultArgs instead
     */
    export type jabatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = jabatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sktmDefaultArgs instead
     */
    export type sktmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sktmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use belumNikahDefaultArgs instead
     */
    export type belumNikahArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = belumNikahDefaultArgs<ExtArgs>
    /**
     * @deprecated Use skckDefaultArgs instead
     */
    export type skckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = skckDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}