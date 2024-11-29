import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMacie2ClassificationExportConfigurationArgsS3Destination {
  bucket_name: string;
  key_prefix?: string;
  kms_key_arn: string;
}
export interface AwsMacie2ClassificationExportConfigurationArgs {
  s3_destination: AwsMacie2ClassificationExportConfigurationArgsS3Destination;
}
export class aws_macie2_classification_export_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2ClassificationExportConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_classification_export_configuration");
  }
}