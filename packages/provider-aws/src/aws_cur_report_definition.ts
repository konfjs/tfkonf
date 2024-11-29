import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCurReportDefinitionArgs {
  additional_artifacts?: string[];
  additional_schema_elements: string[];
  compression: string;
  format: string;
  refresh_closed_reports?: boolean;
  report_name: string;
  report_versioning?: string;
  s3_bucket: string;
  s3_prefix?: string;
  s3_region: string;
  tags?: {
    [key: string]: string;
  };
  time_unit: string;
}
export class aws_cur_report_definition extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCurReportDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_cur_report_definition");
  }
}