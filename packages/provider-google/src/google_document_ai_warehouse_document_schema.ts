import { TerraformConfig, TerraformResource } from "tfs";
export interface DateTimeTypeOptions {}
export interface EnumTypeOptions {
  possible_values: string[];
  validation_check_disabled?: boolean;
}
export interface FloatTypeOptions {}
export interface IntegerTypeOptions {}
export interface MapTypeOptions {}
export interface DateTimeTypeOptions {}
export interface EnumTypeOptions {
  possible_values: string[];
  validation_check_disabled?: boolean;
}
export interface FloatTypeOptions {}
export interface IntegerTypeOptions {}
export interface MapTypeOptions {}
export interface SchemaSources {
  name?: string;
  processor_type?: string;
}
export interface TextTypeOptions {}
export interface TimestampTypeOptions {}
export interface PropertyDefinitions {
  display_name?: string;
  is_filterable?: boolean;
  is_metadata?: boolean;
  is_repeatable?: boolean;
  is_required?: boolean;
  is_searchable?: boolean;
  name: string;
  retrieval_importance?: string;
  date_time_type_options: DateTimeTypeOptions;
  enum_type_options: EnumTypeOptions;
  float_type_options: FloatTypeOptions;
  integer_type_options: IntegerTypeOptions;
  map_type_options: MapTypeOptions;
  schema_sources: SchemaSources;
  text_type_options: TextTypeOptions;
  timestamp_type_options: TimestampTypeOptions;
}
export interface PropertyTypeOptions {
  property_definitions: PropertyDefinitions;
}
export interface SchemaSources {
  name?: string;
  processor_type?: string;
}
export interface TextTypeOptions {}
export interface TimestampTypeOptions {}
export interface PropertyDefinitions {
  display_name?: string;
  is_filterable?: boolean;
  is_metadata?: boolean;
  is_repeatable?: boolean;
  is_required?: boolean;
  is_searchable?: boolean;
  name: string;
  retrieval_importance?: string;
  date_time_type_options: DateTimeTypeOptions;
  enum_type_options: EnumTypeOptions;
  float_type_options: FloatTypeOptions;
  integer_type_options: IntegerTypeOptions;
  map_type_options: MapTypeOptions;
  property_type_options: PropertyTypeOptions;
  schema_sources: SchemaSources;
  text_type_options: TextTypeOptions;
  timestamp_type_options: TimestampTypeOptions;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleDocumentAiWarehouseDocumentSchemaArgs {
  display_name: string;
  document_is_folder?: boolean;
  location: string;
  project_number: string;
  property_definitions: PropertyDefinitions;
  timeouts: Timeouts;
}
export class google_document_ai_warehouse_document_schema extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDocumentAiWarehouseDocumentSchemaArgs) {
    super(config, "resource", args, resourceName, "google_document_ai_warehouse_document_schema");
  }
}