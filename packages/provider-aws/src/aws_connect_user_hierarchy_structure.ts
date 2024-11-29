import { TerraformConfig, TerraformResource } from "tfs";
export interface LevelFive {
  name: string;
}
export interface LevelFour {
  name: string;
}
export interface LevelOne {
  name: string;
}
export interface LevelThree {
  name: string;
}
export interface LevelTwo {
  name: string;
}
export interface HierarchyStructure {
  level_five: LevelFive;
  level_four: LevelFour;
  level_one: LevelOne;
  level_three: LevelThree;
  level_two: LevelTwo;
}
export interface AwsConnectUserHierarchyStructureArgs {
  instance_id: string;
  hierarchy_structure: HierarchyStructure;
}
export class aws_connect_user_hierarchy_structure extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectUserHierarchyStructureArgs) {
    super(config, "resource", args, resourceName, "aws_connect_user_hierarchy_structure");
  }
}