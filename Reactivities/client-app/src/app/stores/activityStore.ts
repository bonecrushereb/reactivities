import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  editMode = false;
  loading = false;
  loadingIntial = false;

  constructor() {
    makeAutoObservable(this)
  }

  loadActivities = async() => {
    this.setLoadingIntial(true);
    try {
      const activities = await agent.Activities.list();
        activities.forEach(activity => {
          activity.date = activity.date.split('T')[0];
          this.activities.push(activity);
        })
        this.setLoadingIntial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingIntial(false);
    }
  }

  setLoadingIntial = (state: boolean) => {
    this.loadingIntial = state;
  }
}
