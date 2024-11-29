import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAuditmanagerFrameworkArgsControlSetsControls {
  id: string;
}
export interface AwsAuditmanagerFrameworkArgsControlSets {
  name: string;
  controls: AwsAuditmanagerFrameworkArgsControlSetsControls;
}
export interface AwsAuditmanagerFrameworkArgs {
  compliance_type?: string;
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  control_sets: AwsAuditmanagerFrameworkArgsControlSets;
}
export class aws_auditmanager_framework extends TerraformResource {
  readonly arn!: string;
  readonly framework_type!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAuditmanagerFrameworkArgs) {
    super(config, "resource", args, resourceName, "aws_auditmanager_framework");
  }
}