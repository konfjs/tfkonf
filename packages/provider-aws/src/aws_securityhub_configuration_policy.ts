import { TerraformConfig, TerraformResource } from "tfs";
export interface Bool {
  value: boolean;
}
export interface Double {
  value: number;
}
export interface Enum {
  value: string;
}
export interface EnumList {
  value: string[];
}
export interface Int {
  value: number;
}
export interface IntList {
  value: number[];
}
export interface String {
  value: string;
}
export interface StringList {
  value: string[];
}
export interface Parameter {
  name: string;
  value_type: string;
  bool: Bool;
  double: Double;
  enum: Enum;
  enum_list: EnumList;
  int: Int;
  int_list: IntList;
  string: String;
  string_list: StringList;
}
export interface SecurityControlCustomParameter {
  security_control_id: string;
  parameter: Parameter;
}
export interface SecurityControlsConfiguration {
  disabled_control_identifiers?: string[];
  enabled_control_identifiers?: string[];
  security_control_custom_parameter: SecurityControlCustomParameter;
}
export interface ConfigurationPolicy {
  enabled_standard_arns?: string[];
  service_enabled: boolean;
  security_controls_configuration: SecurityControlsConfiguration;
}
export interface AwsSecurityhubConfigurationPolicyArgs {
  description?: string;
  name: string;
  configuration_policy: ConfigurationPolicy;
}
export class aws_securityhub_configuration_policy extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubConfigurationPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_configuration_policy");
  }
}