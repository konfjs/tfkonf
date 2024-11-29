import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmAssociationArgsOutputLocation {
  s3_bucket_name: string;
  s3_key_prefix?: string;
  s3_region?: string;
}
export interface AwsSsmAssociationArgsTargets {
  key: string;
  values: string[];
}
export interface AwsSsmAssociationArgs {
  apply_only_at_cron_interval?: boolean;
  association_name?: string;
  automation_target_parameter_name?: string;
  compliance_severity?: string;
  instance_id?: string;
  max_concurrency?: string;
  max_errors?: string;
  name: string;
  schedule_expression?: string;
  sync_compliance?: string;
  tags?: {
    [key: string]: string;
  };
  wait_for_success_timeout_seconds?: number;
  output_location: AwsSsmAssociationArgsOutputLocation;
  targets: AwsSsmAssociationArgsTargets;
}
export class aws_ssm_association extends TerraformResource {
  readonly arn!: string;
  readonly association_id!: string;
  readonly document_version?: string;
  readonly id?: string;
  readonly parameters?: {
    [key: string]: string;
  };
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_association");
  }
}