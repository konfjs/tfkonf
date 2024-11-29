import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodeguruprofilerProfilingGroupArgsAgentOrchestrationConfig {
  profiling_enabled: boolean;
}
export interface AwsCodeguruprofilerProfilingGroupArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  agent_orchestration_config: AwsCodeguruprofilerProfilingGroupArgsAgentOrchestrationConfig;
}
export class aws_codeguruprofiler_profiling_group extends TerraformResource {
  readonly arn!: string;
  readonly compute_platform?: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodeguruprofilerProfilingGroupArgs) {
    super(config, "resource", args, resourceName, "aws_codeguruprofiler_profiling_group");
  }
}