import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword {
  keyword_input_type: string;
  keyword_value: string;
}
export interface AwsAuditmanagerControlArgsControlMappingSources {
  source_description?: string;
  source_frequency?: string;
  source_name: string;
  source_set_up_option: string;
  source_type: string;
  troubleshooting_text?: string;
  source_keyword: AwsAuditmanagerControlArgsControlMappingSourcesSourceKeyword;
}
export interface AwsAuditmanagerControlArgs {
  action_plan_instructions?: string;
  action_plan_title?: string;
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  testing_information?: string;
  control_mapping_sources: AwsAuditmanagerControlArgsControlMappingSources;
}
export class aws_auditmanager_control extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerControlArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_control");
  }
}