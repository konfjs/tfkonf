import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Destination {
  bucket_name: string;
  key_prefix?: string;
  kms_key_arn: string;
}
export interface AwsMacie2ClassificationExportConfigurationArgs {
  s3_destination: S3Destination;
}
export class aws_macie2_classification_export_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2ClassificationExportConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_classification_export_configuration");
  }
}