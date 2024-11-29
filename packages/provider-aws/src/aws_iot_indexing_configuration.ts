import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomField {
  name?: string;
  type?: string;
}
export interface ManagedField {
  name?: string;
  type?: string;
}
export interface ThingGroupIndexingConfiguration {
  thing_group_indexing_mode: string;
  custom_field: CustomField;
  managed_field: ManagedField;
}
export interface CustomField {
  name?: string;
  type?: string;
}
export interface Filter {
  named_shadow_names?: string[];
}
export interface ManagedField {
  name?: string;
  type?: string;
}
export interface ThingIndexingConfiguration {
  device_defender_indexing_mode?: string;
  named_shadow_indexing_mode?: string;
  thing_connectivity_indexing_mode?: string;
  thing_indexing_mode: string;
  custom_field: CustomField;
  filter: Filter;
  managed_field: ManagedField;
}
export interface AwsIotIndexingConfigurationArgs {
  thing_group_indexing_configuration: ThingGroupIndexingConfiguration;
  thing_indexing_configuration: ThingIndexingConfiguration;
}
export class aws_iot_indexing_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotIndexingConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_iot_indexing_configuration");
  }
}