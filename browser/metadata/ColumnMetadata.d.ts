import { ColumnType } from "../driver/types/ColumnTypes";
import { EntityMetadata } from "./EntityMetadata";
import { EmbeddedMetadata } from "./EmbeddedMetadata";
import { RelationMetadata } from "./RelationMetadata";
import { ObjectLiteral } from "../common/ObjectLiteral";
import { ColumnMetadataArgs } from "../metadata-args/ColumnMetadataArgs";
import { Connection } from "../connection/Connection";
import { ValueTransformer } from "../decorator/options/ValueTransformer";
/**
 * This metadata contains all information about entity's column.
 */
export declare class ColumnMetadata {
    /**
     * Target class where column decorator is used.
     * This may not be always equal to entity metadata (for example embeds or inheritance cases).
     */
    target: Function | string;
    /**
     * Entity metadata where this column metadata is.
     *
     * For example for @Column() name: string in Post, entityMetadata will be metadata of Post entity.
     */
    entityMetadata: EntityMetadata;
    /**
     * Embedded metadata where this column metadata is.
     * If this column is not in embed then this property value is undefined.
     */
    embeddedMetadata?: EmbeddedMetadata;
    /**
     * If column is a foreign key of some relation then this relation's metadata will be there.
     * If this column does not have a foreign key then this property value is undefined.
     */
    relationMetadata?: RelationMetadata;
    /**
     * Class's property name on which this column is applied.
     */
    propertyName: string;
    /**
     * The database type of the column.
     */
    type: ColumnType;
    /**
     * Type's length in the database.
     */
    length: string;
    /**
     * Type's display width in the database.
     */
    width?: number;
    /**
     * Defines column character set.
     */
    charset?: string;
    /**
     * Defines column collation.
     */
    collation?: string;
    /**
     * Indicates if this column is a primary key.
     */
    isPrimary: boolean;
    /**
     * Indicates if this column is generated (auto increment or generated other way).
     */
    isGenerated: boolean;
    /**
     * Indicates if column can contain nulls or not.
     */
    isNullable: boolean;
    /**
     * Indicates if column is selected by query builder or not.
     */
    isSelect: boolean;
    /**
     * Indicates if column is protected from updates or not.
     */
    isReadonly: boolean;
    /**
     * Specifies generation strategy if this column will use auto increment.
     */
    generationStrategy?: "uuid" | "increment";
    /**
     * Column comment.
     * This feature is not supported by all databases.
     */
    comment: string;
    /**
     * Default database value.
     */
    default?: any;
    /**
     * ON UPDATE trigger. Works only for MySQL.
     */
    onUpdate?: string;
    /**
     * The precision for a decimal (exact numeric) column (applies only for decimal column),
     * which is the maximum number of digits that are stored for the values.
     */
    precision?: number | null;
    /**
     * The scale for a decimal (exact numeric) column (applies only for decimal column),
     * which represents the number of digits to the right of the decimal point and must not be greater than precision.
     */
    scale?: number;
    /**
     * Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
     * If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to the column
     */
    zerofill: boolean;
    /**
     * Puts UNSIGNED attribute on to numeric column. Works only for MySQL.
     */
    unsigned: boolean;
    /**
     * Array of possible enumerated values.
     */
    enum?: any[];
    /**
     * Generated column expression. Supports only in MySQL.
     */
    asExpression?: string;
    /**
     * Generated column type. Supports only in MySQL.
     */
    generatedType?: "VIRTUAL" | "STORED";
    /**
     * Return type of HSTORE column.
     * Returns value as string or as object.
     */
    hstoreType?: "object" | "string";
    /**
     * Indicates if this column is an array.
     */
    isArray: boolean;
    /**
     * Gets full path to this column property (including column property name).
     * Full path is relevant when column is used in embeds (one or multiple nested).
     * For example it will return "counters.subcounters.likes".
     * If property is not in embeds then it returns just property name of the column.
     */
    propertyPath: string;
    /**
     * Same as property path, but dots are replaced with '_'.
     * Used in query builder statements.
     */
    propertyAliasName: string;
    /**
     * Gets full path to this column database name (including column database name).
     * Full path is relevant when column is used in embeds (one or multiple nested).
     * For example it will return "counters.subcounters.likes".
     * If property is not in embeds then it returns just database name of the column.
     */
    databasePath: string;
    /**
     * Complete column name in the database including its embedded prefixes.
     */
    databaseName: string;
    /**
     * Database name in the database without embedded prefixes applied.
     */
    databaseNameWithoutPrefixes: string;
    /**
     * Database name set by entity metadata builder, not yet passed naming strategy process and without embedded prefixes.
     */
    givenDatabaseName?: string;
    /**
     * Indicates if column is virtual. Virtual columns are not mapped to the entity.
     */
    isVirtual: boolean;
    /**
     * Indicates if column is discriminator. Discriminator columns are not mapped to the entity.
     */
    isDiscriminator: boolean;
    /**
     * Indicates if column is tree-level column. Tree-level columns are used in closure entities.
     */
    isTreeLevel: boolean;
    /**
     * Indicates if this column contains an entity creation date.
     */
    isCreateDate: boolean;
    /**
     * Indicates if this column contains an entity update date.
     */
    isUpdateDate: boolean;
    /**
     * Indicates if this column contains an entity version.
     */
    isVersion: boolean;
    /**
     * Indicates if this column contains an object id.
     */
    isObjectId: boolean;
    /**
     * If this column is foreign key then it references some other column,
     * and this property will contain reference to this column.
     */
    referencedColumn: ColumnMetadata | undefined;
    /**
     * Specifies a value transformer that is to be used to (un)marshal
     * this column when reading or writing to the database.
     */
    transformer?: ValueTransformer;
    /**
     * Column type in the case if this column is in the closure table.
     * Column can be ancestor or descendant in the closure tables.
     */
    closureType?: "ancestor" | "descendant";
    /**
     * Indicates if this column is nested set's left column.
     * Used only in tree entities with nested-set type.
     */
    isNestedSetLeft: boolean;
    /**
     * Indicates if this column is nested set's right column.
     * Used only in tree entities with nested-set type.
     */
    isNestedSetRight: boolean;
    /**
     * Indicates if this column is materialized path's path column.
     * Used only in tree entities with materialized path type.
     */
    isMaterializedPath: boolean;
    /**
     * SRID (Spatial Reference ID (EPSG code))
     */
    srid?: number;
    constructor(options: {
        connection: Connection;
        entityMetadata: EntityMetadata;
        embeddedMetadata?: EmbeddedMetadata;
        referencedColumn?: ColumnMetadata;
        args: ColumnMetadataArgs;
        closureType?: "ancestor" | "descendant";
        nestedSetLeft?: boolean;
        nestedSetRight?: boolean;
        materializedPath?: boolean;
    });
    /**
     * Creates entity id map from the given entity ids array.
     */
    createValueMap(value: any, useDatabaseName?: boolean): any;
    /**
     * Extracts column value and returns its column name with this value in a literal object.
     * If column is in embedded (or recursive embedded) it returns complex literal object.
     *
     * Examples what this method can return depend if this column is in embeds.
     * { id: 1 } or { title: "hello" }, { counters: { code: 1 } }, { data: { information: { counters: { code: 1 } } } }
     */
    getEntityValueMap(entity: ObjectLiteral, options?: {
        skipNulls?: boolean;
    }): ObjectLiteral | undefined;
    /**
     * Extracts column value from the given entity.
     * If column is in embedded (or recursive embedded) it extracts its value from there.
     */
    getEntityValue(entity: ObjectLiteral, transform?: boolean): any | undefined;
    /**
     * Sets given entity's column value.
     * Using of this method helps to set entity relation's value of the lazy and non-lazy relations.
     */
    setEntityValue(entity: ObjectLiteral, value: any): void;
    build(connection: Connection): this;
    protected buildPropertyPath(): string;
    protected buildDatabasePath(): string;
    protected buildDatabaseName(connection: Connection): string;
}
