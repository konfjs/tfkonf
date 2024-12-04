import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmDocumentArgsAttachmentsSource {
  key: string;
  name?: string;
  values: string[];
}

export interface AwsSsmDocumentArgs {
  content: string;
  document_format?: string;
  document_type: string;
  name: string;
  permissions?: { [key: string]: string };
  tags?: { [key: string]: string };
  target_type?: string;
  version_name?: string;
  attachments_source: AwsSsmDocumentArgsAttachmentsSource;
}

export class aws_ssm_document extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly default_version!: string;
  readonly description!: string;
  readonly document_version!: string;
  readonly hash!: string;
  readonly hash_type!: string;
  readonly id?: string;
  readonly latest_version!: string;
  readonly owner!: string;
  readonly parameter!: any[];
  readonly platform_types!: string[];
  readonly schema_version!: string;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmDocumentArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_document");
  }
}
